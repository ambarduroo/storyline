// =========================
// STORYLINE — JAVASCRIPT
// =========================


// =========================
// RESEÑAS
// =========================

const reviewButton = document.getElementById("reviewButton");

if (reviewButton) {

    reviewButton.addEventListener("click", function () {

        const movieOrBook = prompt(
            "¿Qué película o libro querés reseñar?"
        );

        if (!movieOrBook || movieOrBook.trim() === "") {
            return;
        }

        const review = prompt(
            "Escribí tu opinión:"
        );

        if (!review || review.trim() === "") {
            return;
        }

        const reviewCard = document.createElement("article");

        reviewCard.className = "card";

        reviewCard.innerHTML = `
            <p class="card-number">
                NUEVA RESEÑA
            </p>

            <h3>
                ${movieOrBook}
            </h3>

            <p>
                "${review}"
            </p>

            <p>
                — Opinión de la comunidad
            </p>
        `;

        const reviewsSection = document.querySelector("#resenas .cards");

        if (reviewsSection) {
            reviewsSection.appendChild(reviewCard);
        }

        alert(
            "¡Gracias por compartir tu reseña sobre " +
            movieOrBook +
            "!"
        );

    });

}


// =========================
// ASISTENTE DE RECOMENDACIONES
// =========================

const recommendationForm =
    document.getElementById("recommendationForm");

const aiResponse =
    document.getElementById("aiResponse");

const history =
    document.getElementById("history");


if (recommendationForm) {

    recommendationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const genre =
            document.getElementById("genre").value;

        const preferences =
            document.getElementById("preferences").value
            .trim()
            .toLowerCase();


        if (!genre) {

            aiResponse.innerHTML = `
                <h3>
                    Elegí un género primero.
                </h3>
            `;

            return;
        }


        let recommendation;


        // THRILLER

        if (
            genre === "thriller" ||
            preferences.includes("shutter") ||
            preferences.includes("suspenso") ||
            preferences.includes("tension") ||
            preferences.includes("plot twist") ||
            preferences.includes("giro")
        ) {

            recommendation = {
                title: "Shutter Island",
                text: "Si te gustan los misterios, la tensión y las historias que te hacen dudar de todo, esta es una muy buena opción."
            };

        }


        // MISTERIO

        else if (
            genre === "misterio" ||
            preferences.includes("misterio") ||
            preferences.includes("magia") ||
            preferences.includes("secreto")
        ) {

            recommendation = {
                title: "The Prestige",
                text: "Tiene secretos, rivalidad, obsesión y varios giros. Ideal si querés una película que te haga pensar."
            };

        }


        // DRAMA

        else if (
            genre === "drama" ||
            preferences.includes("llorar") ||
            preferences.includes("emocion") ||
            preferences.includes("emocional")
        ) {

            recommendation = {
                title: "Dead Poets Society",
                text: "Una historia sobre libertad, amistad, literatura y encontrar tu propia voz. Tiene momentos bastante emocionales."
            };

        }


        // ROMANCE

        else if (
            genre === "romance" ||
            preferences.includes("romantica") ||
            preferences.includes("romántica") ||
            preferences.includes("amor") ||
            preferences.includes("pareja")
        ) {

            recommendation = {
                title: "Pride and Prejudice",
                text: "Un romance clásico con personajes complejos, orgullo, prejuicios y una relación que se va construyendo de a poco."
            };

        }


        // CLÁSICOS

        else if (
            genre === "clasico" ||
            preferences.includes("clasico") ||
            preferences.includes("clásico")
        ) {

            recommendation = {
                title: "The Great Gatsby",
                text: "Un clásico sobre amor, sueños, obsesión y una vida aparentemente perfecta que esconde mucho más."
            };

        }


        // AVENTURA

        else if (
            genre === "aventura" ||
            preferences.includes("aventura") ||
            preferences.includes("fantasia") ||
            preferences.includes("fantasía") ||
            preferences.includes("magico") ||
            preferences.includes("mágico")
        ) {

            recommendation = {
                title: "Harry Potter",
                text: "Una saga para perderte en otro mundo, con magia, amistad, aventuras y una historia que crece con cada película."
            };

        }


        // RECOMENDACIÓN GENERAL

        else {

            recommendation = {
                title: "The Truman Show",
                text: "Si no tenés muy claro qué querés ver, esta es una buena opción: mezcla drama, misterio y una historia que te deja pensando."
            };

        }


        // MOSTRAR RECOMENDACIÓN

        aiResponse.innerHTML = `
            <p class="card-number">
                STORYLINE TE RECOMIENDA
            </p>

            <h3>
                ${recommendation.title}
            </h3>

            <p>
                ${recommendation.text}
            </p>

            ${
                preferences
                ? `
                    <p>
                        <strong>
                            Tuvimos en cuenta:
                        </strong>
                        ${preferences}
                    </p>
                `
                : ""
            }
        `;


        // =========================
        // GUARDAR EN HISTORIAL
        // =========================

        const historyItem =
            document.createElement("article");

        historyItem.className = "card";

        historyItem.innerHTML = `
            <p class="card-number">
                RECOMENDACIÓN
            </p>

            <h3>
                ${recommendation.title}
            </h3>

            <p>
                ${recommendation.text}
            </p>
        `;


        if (
            history &&
            history.innerHTML.includes(
                "Todavía no tenés recomendaciones."
            )
        ) {

            history.innerHTML = "";

        }


        if (history) {

            history.appendChild(historyItem);

        }

    });

}
// =========================
// BOT STORYLINE
// =========================

const openBot = document.getElementById("openBot");
const closeBot = document.getElementById("closeBot");
const storylineBot = document.getElementById("storylineBot");

if (openBot && storylineBot) {

    openBot.addEventListener("click", function () {

        storylineBot.style.display = "block";

    });

}

if (closeBot && storylineBot) {

    closeBot.addEventListener("click", function () {

        storylineBot.style.display = "none";

    });

}
// =========================
// CHAT DEL BOT STORYLINE
// =========================

const botInput = document.getElementById("botInput");
const sendBot = document.getElementById("sendBot");
const botMessages = document.getElementById("botMessages");

function sendMessage() {

    const message = botInput.value.trim();

    if (!message) {
        return;
    }

    // Mostrar mensaje del usuario

    const userMessage = document.createElement("div");

    userMessage.className = "userMessage";

    userMessage.textContent = message;

    botMessages.appendChild(userMessage);


    // Limpiar input

    botInput.value = "";


    // Respuesta de STORYLINE

    let response = "";


    const text = message.toLowerCase();


    if (
        text.includes("shutter island") ||
        text.includes("plot twist") ||
        text.includes("giro") ||
        text.includes("suspenso")
    ) {

        response =
            "Si te gustó Shutter Island y querés algo con misterio y giros, te recomiendo The Prestige. Tiene secretos, obsesión y una historia que te hace pensar bastante.";

    }

    else if (
        text.includes("romance") ||
        text.includes("romántica") ||
        text.includes("romantica") ||
        text.includes("amor")
    ) {

        response =
            "Si buscás romance, te recomiendo Pride and Prejudice. Tiene una historia de amor que se construye de a poco y muchos choques entre los personajes.";

    }

    else if (
        text.includes("llorar") ||
        text.includes("triste") ||
        text.includes("emocional")
    ) {

        response =
            "Si querés algo emocional, probá Dead Poets Society. Tiene amistad, literatura y momentos que realmente quedan dando vueltas.";

    }

    else if (
        text.includes("aventura") ||
        text.includes("fantasía") ||
        text.includes("fantasia") ||
        text.includes("magia")
    ) {

        response =
            "Para aventura y fantasía, Harry Potter es una opción perfecta. Si querés perderte en otro mundo, esta saga tiene muchísimo para ofrecer.";

    }

    else {

        response =
            "Mmm, creo que puedo ayudarte 🎬 Probá decirme qué género querés, qué película te gustó o qué estás buscando. Por ejemplo: 'quiero algo parecido a Shutter Island'.";

    }


    // Mostrar respuesta

    const botMessage = document.createElement("div");

    botMessage.className = "botMessage";

    botMessage.textContent = response;

    botMessages.appendChild(botMessage);


    // Bajar automáticamente

    botMessages.scrollTop = botMessages.scrollHeight;

}


if (sendBot) {

    sendBot.addEventListener("click", sendMessage);

}


if (botInput) {

    botInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    });

}
