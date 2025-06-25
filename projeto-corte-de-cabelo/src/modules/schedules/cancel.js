import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            const item = event.target.closest("li");
            const { id } = item.dataset
            if (id) {
                const isConfirme = confirm("Deseja cancelar o agendamento?");
                if (isConfirme) {
                    await scheduleCancel(id);
                    schedulesDay()
                }
            }
        }
    })
})

