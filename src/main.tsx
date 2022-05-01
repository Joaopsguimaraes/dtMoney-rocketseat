import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model }from "miragejs";
import {App} from "./App"

createServer({
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 5000,
          createdAt: new Date("2022-02-12 09:00:00")
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Moradia",
          amount: 1000,
          createdAt: new Date("2022-02-12 10:00:00")
        }
      ]
    })
  },

  routes(){
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
