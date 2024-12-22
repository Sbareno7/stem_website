document.addEventListener("DOMContentLoaded", () => {
    const experiments = {
        exp1: {
            title: "Fire Hands",
            image: `${staticBaseUrl}photos/exp1.jpeg`,
            description: `
                <strong>DO NOT TRY AT HOME / WITHOUT ADULT SUPERVISION</strong>
                <hr>
                <strong>Safety Equipment:</strong>
                <ul>
                    <li>Safety Goggles</li>
                </ul>
                <hr>
                <strong>Apparatus:</strong>
                <ul>
                    <li>Large container</li>
                    <li>Soap</li>
                    <li>Water</li>
                    <li>Source of Methane Gas</li>
                    <li>Lighter</li>
                    <li>Wooden splint</li>
                </ul>
                <hr>
                <strong>Preparation:</strong>
                <ol style="margin-bottom: 50px;">
                    <li>Fill the container about half way with water.</li>
                    <li>Add soap to the water and mix thoroughly</li>
                </ol>
                <hr>
                <strong>Method:</strong>
                <ol>
                    <li>Bubble methane gas through the water and soap mixture. The methane will create bubbles on the water's surface.</li>
                    <li>Once enough bubbles are made, grab the bubbles from the water's surface.</li>
                    <li>(Someone else) Light a splint with the lighter and make the flame come into contact with the bubbles. <strong>Ensure that the person holding the bubbles has his/her arms extended to prevent burns</strong>.</li>
                    <li>Stay still until the flame extinguishes by itself.</li>
                </ol>
            `,
        },
        exp2: {
            title: "Flame Tests",
            image: `${staticBaseUrl}photos/exp2.jpeg`,
            description: `
                <strong>Safety Equipment:</strong>
                <ul>
                    <li>Safety Goggles</li>
                </ul>
                <strong>Apparatus:</strong>
                <ul>
                    <li>Lighter</li>
                    <li>Thin Metal Wire</li>
                    <li>Bunsen Burner</li>
                    <li>Beaker</li>
                    <li>Test Tubes / Petri Dishes</li>
                </ul>
                <hr>
                <strong>Chemicals:</strong>
                <ul>
                    <li>Dilute Hydrochloric Acid (HCl) to serilise rods</li>
                    <li>Ion Samples:
                        <ul>
                            <li>Calcium Chloride</li>
                            <li>Copper Chloride</li>
                            <li>Lithium Chloride</li>
                            <li>Potassium Chloride</li>
                            <li>Sodium Chloride</li>
                        </ul>
                    </li>
                </ul>
                <hr>
                <strong>Preparation:</strong>
                <ol style="margin-bottom: 50px;">
                    <li>Set apparatus up on each bench, with a sample of each salt in a petri dish/test tube. Do not label the samples.</li>
                    <li>Set up a demo (using only one sample).</li>
                    <li>Write a table which shows ions and their colours on the board.</li>
                    <li>Write a table which shows ions and their colours on the board.</li>
                </ol>
                <hr>
                <strong>Method:</strong>
                <ol>
                    <li>Sterilise metal wire by dipping it in HCl and putting it under a blue flame.</li>
                    <li>Use metal wire to collect some of one sample (or, if aqueous, dip into sample).</li>
                    <li>Place the tip of the metal wire into a blue flame. Observe colour change.</li>
                    <li>Attempt to identify sample using what is written on the board.</li>
                    <li>Repeat 1-4 with other samples.</li>
                </ol>
                <hr>
                <strong>Use of Flame Tests</strong>
                <div>They are mainly used to identify a cation from an unknown salt.</div>
                <hr>
                <strong>Why do Flame Tests Work?</strong>
                <div>The heat makes the cations’ electrons move to a higher energy level, which is unstable.
                     In doing this, they release energy, part of which is visible light.</div>
            `,
        },
        exp3: {
            title: "pH Indicator Using Red Cabbage",
            image: `${staticBaseUrl}photos/exp3.jpeg`,
            description: `
                <strong>Introduction</strong>
                <ul>
                    <li>The pH of a substance is how acidic or basic it is.</li>
                    <li>Usually, universal indicators or other lab made indicators are used to accurately measure the
                        pH of something.</li>
                    <li>However, you can make a homemade indicator with simply red cabbage</li>
                </ul>
                <hr>
                <strong>Safety Equipment:</strong>
                <ul>
                    <li>Safety Goggles</li>
                    <li>Latex Gloves</li>
                </ul>
                <hr>
                <strong>Apparatus:</strong>
                <ul>
                    <li>Red Cabbage</li>
                    <li>Knife</li>
                    <li>Filter Paper</li>
                    <li>Funnel</li>
                    <li>Kettle</li>
                    <li>Conical Flask</li>
                    <li>Pipette</li>
                    <li>Test Tubes</li>
                    <li>25cm&#179; Measuring Cylinder</li>
                    <li>Hydrochloric Acid</li>
                    <li>Sodium Hydroxide</li>
                    <li>Water</li>
                    <li>Mystery liquid (could use ethanoic acid)</li>
                </ul>
                <hr>
                <strong>Preparation:</strong>
                <ol style="margin-bottom: 50px;">
                    <li>Dice up the red cabbage into small squares with the knife.</li>
                    <li>Measure 5cm&#179; of hydrochloric acid using the measuring cylinder and pour it into a test tube.</li>
                    <li>Rinse the measuring cylinder and do the same with the sodium hydroxide, water and mystery liquid.</li>
                    <li>Label the hydrochloric acid, water and sodium hydroxide test tubes</li>
                    <li>Boil hot water.</li>
                </ol>
                <hr>
                <strong>Method:</strong>
                <ol>
                    <li>Put the cabbage pieces into the filter paper in the funnel and pour hot water into it
                        with the conical flask under it. A dark blue water should come out.</li>
                    <li>Use the pipette to collect a few drops of the indicator filtrate and add it to each of the
                        labelled test tubes.</li>
                    <li>Observe the colours.</li>
                    <li>Add a few drops of red cabbage indicator to the “mystery liquid” and identify the
                        colour.</li>
                    <li>Analyse the pH of the “mystery liquid” by comparing the colour it produced with the
                        colours of hydrochloric acid, sodium hydroxide and water.</li>
                </ol>
            `,
        },
        exp4: {
            title: "Static Electricity Demo With Balloons",
            image: `${staticBaseUrl}photos/exp4.jpeg`,
            description: `
                <strong>Introduction</strong>
                <ul>
                    <li>Static electricity, or stationary electric charge, is the imbalance of charge in an object, usually caused by friction, that remains within the surface of a material.</li>
                    <li>Electric insulators (e.g. rubber) are best at gaining a static charge. Meanwhile, conductors like metal are unable to hold a static charge.</li>
                    <li>In thsi experiment, we will demonstarte the attractive properties of statically charged materials.</li>
                </ul>
                <hr>
                <strong>Safety Equipment:</strong>
                <ul>
                    <li>Safety Goggles</li>
                </ul>
                <hr>
                <strong>Apparatus:</strong>
                <ul>
                    <li>Balloons</li>
                </ul>
                <hr>
                <strong>Preparation:</strong>
                <ol style="margin-bottom: 50px;">
                    <li>Inflate a balloon.</li>
                </ol>
                <hr>
                <strong>Method:</strong>
                <ol>
                    <li>Quickly rub the balloon on your hair. This will the cause the electrons in the hair to move to the balloon, causing the balloon to gain a negative charge and the hair to gain a positive charge</li>
                    <li>As your hair is positively charged, each individual hair will repel the other hairs, causing them to elevate.</li>
                    <li>As the balloon is negatively charged, it will be attracted to other objects. Try holding the balloon near a wall, water from a faucet and another charged balloon</li>
                </ol>
            `,
        },
    };

    // Open popup on experiment box click
    document.querySelectorAll(".experiment-box").forEach((box) => {
        box.addEventListener("click", () => {
            const experimentId = box.getAttribute("data-experiment");
            const experiment = experiments[experimentId];
            if (!experiment) return;

            const popup = document.getElementById("experiment-popup");
            const popupDetails = document.getElementById("popup-details");

            popupDetails.innerHTML = `
                <h2>${experiment.title}</h2>
                <img src="${experiment.image}" alt="${experiment.title}" class="popup-image" />
                <div class="popup-description">${experiment.description}</div>
            `;

            popup.classList.add("active");
        });
    });

    // Close popup on close button click
    document.getElementById("close-popup").addEventListener("click", () => {
        document.getElementById("experiment-popup").classList.remove("active");
    });

    // Close popup on pressing the Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            document.getElementById("experiment-popup").classList.remove("active");
        }
    });

    // Close popup when clicking outside the pop-up content
    const popup = document.getElementById("experiment-popup");
    popup.addEventListener("click", (event) => {
        const popupContent = popup.querySelector(".popup-content");
        if (!popupContent.contains(event.target)) {
            popup.classList.remove("active");
        }
    });
});
