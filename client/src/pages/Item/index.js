import React, { useState, useContext, useEffect } from "react";
import ebay from "../../services/ebayApi";
import { Context as ItemContext } from "../../context/ItemContext";

import newStamp from "../../assets/new.png";
import back from "../../assets/back.svg";

import "./styles.css";

export default function Item({ history }) {
    const { state } = useContext(ItemContext);
    const [item, setItem] = useState({ image: "", additionalImages: [], price: "" })

    useEffect(() => {
        if (state.length == 0) {
            history.push("/");
        } else {
            const lastItem = state[state.length - 1].itemId
            ebay.get(`https://api.ebay.com/buy/browse/v1/item/${lastItem}`)
                .then((response) => {
                    setItem(response.data)
                })
        }
    }, [])

    function handleClick() {
        history.push("/")
    }

    return (
        <>
            <div>
                <button type="button" className="backbutton" onClick={handleClick}>
                    <img src={back} alt="Voltar" />
                </button>
            </div>
            <div className="itemDetail">
                <div className="listImages">
                    <img src={item.image.imageUrl} />
                    {
                        item.additionalImages && item.additionalImages.map((obj) => {
                            return (
                                <img src={obj.imageUrl} />
                            )
                        })
                    }
                </div>
                <div className="title">{item.title}</div>
                <div className="description">{item.shortDescription}</div>
                <div className="price">Preço:
                    <label className="priceValue">
                        {(item.price.currency == "USD") ? "$" : ""}{item.price.value}
                    </label>
                </div>
            </div>
        </>
    );
}
