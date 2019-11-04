const axios = require("axios");

const ebay = axios.create({
    baseURL: "https://api.ebay.com/",
    headers: {
        // PRODUCTION
        "Authorization": "Bearer v^1.1#i^1#r^0#p^1#f^0#I^3#t^H4sIAAAAAAAAAOVYXWwUVRTe7fYnDSAYEZQ/1wGNsZnZOzu73Z2BXdj+wZptu3SXFioCd2butsPOzzJzp+0axNJQSEwagxoEjQYDBDWg8aEaENRAiKAPGCMxEhMeRCPGiGIAJT44s13KthKodNUm7svmnnvuud/5zjn3nrmgt7zy0a3Ltl6d4qwo2d0LekucTnoSqCwvq7rLVTKrzAEKFJy7exf0lva5vl9kQEXOcC3IyGiqgdw9iqwaXE4YIkxd5TRoSAanQgUZHBa4RKQxxnkpwGV0DWuCJhPuaF2I8KVEMUgHRb8X8QHa67Ok6nWbSc2aZwUg8jwDWQFBRoTWvGGYKKoaGKo4RHgBzZI0TQJfkmY4H8N5g5Sf9rUT7lakG5KmWioUIMI5uFxurV6A9dZQoWEgHVtGiHA00pBojkTr6puSizwFtsJ5HhIYYtMYOarVRORuhbKJbr2NkdPmEqYgIMMgPOGhHUYa5SLXwdwB/BzV1SwvBhnWS4OgnxV4VBQqGzRdgfjWOGyJJJKpnCqHVCzh7O0Ytdjg1yMB50dNlolondv+W25CWUpJSA8R9TWRVZF4nAg34y5Jq9EhmYAqGW+pIwHP0KJf8IokhAErg2ghv8eQoTzDozap1VRRsvky3E0arkEWYDSaFqaAFkupWW3WIylsgynU81+nD7DtdjyHAmjiTtUOKVIsDty54e3JH16NsS7xJkbDFkZP5NgJETCTkURi9GQuDfOZ02OEiE6MM5zH093dTXUzlKZ3eLwA0J6VjbGE0IkUq87yunatG9LtF5BSzhXBSqseQ+JwNmNh6bHS1AKgdhBhH/Cy1XSe95GwwqOlfxEU+OwZWQzFKg7kh6xfFPxsICgEeMAXozjC+fz02DgQD7OkAvU0whkZCogUrDwzFaRLIsf4U14mmEKkWM2mSB+bSpG8X6wm6RRCACGeF9jg/6RGxprlCSToCBcvzYuR4p0JT7q1o0X2NZhKdUxrb1qVbOtgYmYsZSpZ/kmfWMNXb1CibV2wMTTWQri584KWQXFNloRsURmwa33cLDC6GIc6ziaQLFuCcTlq2I5OsCBb6w3LAMxIlF3TlKApHg1ah7ktWptDPC6fI5lMVFFMDHkZRYt4kP/7h/hN3ZOsDmdC+WTFbyiQkjjUmlC5aFJGl0DpyNBM3erKqGb7uk5qaaRaJyDWNVlGeuv4mLAD/d/F1671m/Ix9nviztwucn8yQdJakCUre9ZONM/+6WBKcILdwbQ/4A0G/AAEx+VXbS6cyexEu32WaQZG4t/tokuZMfTRnpEf9GFH7kf3OQdBn/OdEqcTeMBD9HzwYLlrRalr8ixDwoiSYIoypA7V+k7VEZVG2QyU9JJyp/Tc59vOFDwh7H4C3Df8iFDpoicVvCiAOTdmyuipM6fQLE0DH834GG+wHcy/MVtKzyidfqr+eJWrpOph7y7uh13ziWvbz9VjMGVYyeksc5T2OR07Gt9c8Htsw7FrMx64crhqWuflV/ZVpve/sLeb8S2Jz7vaf/S1gU+//fgb/+K5b/fXyG+cXvnRgbMV2zbN/FB4ZPHAvLr1/S9t/KNl4J6WI2sGDzoie6om3f/b+9PS03+WL3gfvxKv8/jO/einpD2Rzav7p848POf8kXt/mr34gy1tgRVvJS4vvbtmNks/8+pqmVzz3dPZ7GOzv95zBi29vGPJ6UOHuU+yxy+evTD56vLnF6p1e/su7ZRWDJxIbj6wvCtWexRWHFt/sfX1qNm0bm7LZMrnOrqurSe9X3nwmOPSFy+/2BYBhy4sHPzsVPyX9847Bg7GTy4o/+qpnVtObDqxr2LjyYH2L3dsf7bh3V8Hh8L3J2aaPhDcEQAA"
    }
});

module.exports = ebay;