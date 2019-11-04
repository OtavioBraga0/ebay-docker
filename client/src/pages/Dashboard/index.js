import React, { useState, useContext, useEffect } from "react";
import api from "../../services/api";
import ebay from "../../services/ebayApi";
import { Context as FavoriteContext } from "../../context/FavoriteContext";
import { Context as ItemContext } from "../../context/ItemContext";

import newStamp from "../../assets/new.png";
import trash from "../../assets/trash.svg";
import edit from "../../assets/edit.svg";

import "./styles.css";

export default function Dashboard({ history }) {
  const { state } = useContext(FavoriteContext)

  const { selectItem } = useContext(ItemContext)
  const { favoriteForm } = useContext(FavoriteContext)

  const [formValidation, setFormValidation] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const [formPhrase, setFormPhrase] = useState("");

  const [email, setEmail] = useState("");
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState("");
  const [time, setTime] = useState(2);
  const [alerts, setAlerts] = useState("");

  const [alertId, setAlertId] = useState("");

  useEffect(() => {
    if (state.length != 0) {
      const lastForm = state[state.length - 1]
      setEmail(lastForm.email);
      setSearch(lastForm.search);
      setTime(lastForm.time);
    }
  }, [])

  function handleBlur(text) {
    setEmail(text)
    api.get(`searchFavorite/${email}`).then((response) => {
      setAlerts(response.data);
    })
  }

  function handleSubmit() {
    if (email && search) {
      api.post("addFavorite", {
        email: email,
        time: time,
        search: search
      }).then((response) => {
        setFormValidation(false);
        setFormPhrase("Alerta criado");
        setAlerts(response.data)
      })
    } else {
      setFormValidation(false);
      setFormPhrase("Preencha todos os campos");
    }
  }

  function handleChange(textSearch) {
    setSearch(textSearch);
    ebay.get(`buy/browse/v1/item_summary/search?q=${search}&limit=5&sort=price`)
      .then((response) => {
        setResponse(response.data.itemSummaries);
      })
  }

  function handleDoubleClick(itemId) {
    selectItem(itemId);
    favoriteForm(email, time, search)
    history.push("/item");
  }

  function handleClickDelete(alertId) {
    api.get(`deleteFavorite/${email}/${alertId}`).then((response) => {
      setFormValidation(false);
      setFormPhrase("Alerta excluido!");
      setAlerts(response.data)
    })
  }

  function handleClickEdit(alertEmail, alertTime, alertSearch, id) {
    setEmail(alertEmail);
    setTime(alertTime);
    setSearch(alertSearch);
    setAlertId(id);

    setIsEdit(true)
  }

  function editAlert() {
    api.post(`editFavorite/${alertId}`, {
      email: email,
      time: time,
      search: search
    }).then((response) => {
      setFormValidation(false);
      setFormPhrase("Alerta editado!");
      console.log(response.data);

      setAlerts(response.data)
    })
  }

  return (
    <div className="dashboard">
      <form>
        {(!formValidation) ? (<label className="phrase">{formPhrase}</label>) : ""}
        <br></br>
        <label>
          E-mail:
        <input type="text" value={email} name="email" onBlur={(event) => handleBlur(event.target.value)} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Tempo:
        <select name="time" value={time} onChange={(event) => setTime(event.target.value)}>
            <option value="2">2 min.</option>
            <option value="10">10 min.</option>
            <option value="30">30 min.</option>
          </select>
        </label>
        <label>
          Pesquisa:
        <input type="text" value={search} name="search" onChange={(event) => handleChange(event.target.value)} />
          {
            (response.length != 0) ? (<label>Dê duplo click para acessar os detalhes do item</label>) : ""
          }
          <ul className="resultList">
            {
              response.map((obj) => {
                return (
                  <li className="item"
                    onDoubleClick={() => handleDoubleClick(obj.itemId)}
                    key={obj.itemId}>
                    <div className="image" style={{ backgroundImage: `url(${obj.image.imageUrl})` }} >
                      {
                        (obj.condition == "New" || obj.condition == "Brand New") ? (<img src={newStamp} alt="New" />) : ""
                      }
                    </div>
                    <div className="description">
                      <label className="title">{obj.title}</label>
                      <label className="price">{(obj.price.currency == "USD") ? " $" : ""}{obj.price.value}</label>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </label>
        <input type="button" onClick={() => (!isEdit) ? handleSubmit() : editAlert()} className="btn" value="Colocar no Favoritos" />
      </form>
      <div className="alerts">
        {
          alerts && alerts.map((obj) => {
            return (
              <div className="alert">
                <div className="details">
                  <label><b>Frase Buscada: </b>"{obj.search}"</label>
                  <label><b>Tempo: </b>{obj.time} min.</label>
                </div>
                <div className="options">
                  <img src={edit} alt="Editar" onClick={() => handleClickEdit(obj.email, obj.time, obj.search, obj._id)} />
                  <img src={trash} alt="Excluir" onClick={() => handleClickDelete(obj._id)} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
