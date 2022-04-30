import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createServer }from "miragejs";
import {App} from "./App"

createServer({
  routes(){
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "transactions",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
