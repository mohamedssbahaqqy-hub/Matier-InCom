/* =====================================================
   MATIER CALCULATOR
   JAVASCRIPT
===================================================== */


/* =====================================================
   TEAM LEADERS - POSTE 450
===================================================== */

const teamLeaders = [

    "Kaoutar Benzayzon",

    "Mostapha Haddani",

    "Youssra Benayad"

];


/* =====================================================
   COORDINATEURS - POSTE 402
===================================================== */

const coordinateurs = [

    "Oualid Elyoussfy",

    "Yassin Razma",

    "Aissa Elhart"

];


/* =====================================================
   MATERIAL DATABASE
=====================================================

   IMPORTANT:
   Les quantités sont actuellement à 0.

   Nous ajouterons les vraies quantités
   lorsque tu me donneras les données.
===================================================== */


const materialDatabase = {


    /* =================================================
       V163 DAMIEL
    ================================================= */

    "V163 Damiel": [

        {
            reference: "Shell LW + WW",
            name: "Shell LW + WW",
            quantity: 0,
            unit: ""
        },

        {
            reference: "Main Web",
            name: "Main Web",
            quantity: 0,
            unit: ""
        },

        {
            reference: "TE Web",
            name: "TE Web",
            quantity: 0,
            unit: ""
        },

        {
            reference: "TE Insert",
            name: "TE Insert",
            quantity: 0,
            unit: ""
        },

        {
            reference: "RTF",
            name: "RTF",
            quantity: 0,
            unit: ""
        },

        {
            reference: "Lamination",
            name: "Lamination",
            quantity: 0,
            unit: ""
        }

    ],



    /* =================================================
       V163 WD
    ================================================= */

    "V163 WD": [

        {
            reference: "Shell LW + WW",
            name: "Shell LW + WW",
            quantity: 0,
            unit: ""
        },

        {
            reference: "Main Web",
            name: "Main Web",
            quantity: 0,
            unit: ""
        },

        {
            reference: "TE Web",
            name: "TE Web",
            quantity: 0,
            unit: ""
        },

        {
            reference: "TE Insert",
            name: "TE Insert",
            quantity: 0,
            unit: ""
        },

        {
            reference: "RTF",
            name: "RTF",
            quantity: 0,
            unit: ""
        },

        {
            reference: "Lamination",
            name: "Lamination",
            quantity: 0,
            unit: ""
        }

    ],



    /* =================================================
       V136
    ================================================= */

    "V136": [

        {
            reference: "Shell LW + WW",
            name: "Shell LW + WW",
            quantity: 0,
            unit: ""
        },

        {
            reference: "Main Web",
            name: "Main Web",
            quantity: 0,
            unit: ""
        },

        {
            reference: "TE Web",
            name: "TE Web",
            quantity: 0,
            unit: ""
        },

        {
            reference: "TE Insert",
            name: "TE Insert",
            quantity: 0,
            unit: ""
        },

        {
            reference: "RTF",
            name: "RTF",
            quantity: 0,
            unit: ""
        }

    ],



    /* =================================================
       V110
    ================================================= */

    "V110": [

        {
            reference: "Shell",
            name: "Shell",
            quantity: 0,
            unit: ""
        },

        {
            reference: "Lamination",
            name: "Lamination",
            quantity: 0,
            unit: ""
        }

    ],



    /* =================================================
       V236
    ================================================= */

    "V236": [

        {
            reference: "Shell LW + WW",
            name: "Shell LW + WW",
            quantity: 0,
            unit: ""
        },

        {
            reference: "Main Web",
            name: "Main Web",
            quantity: 0,
            unit: ""
        },

        {
            reference: "TE Web",
            name: "TE Web",
            quantity: 0,
            unit: ""
        },

        {
            reference: "TE Insert",
            name: "TE Insert",
            quantity: 0,
            unit: ""
        },

        {
            reference: "RTF",
            name: "RTF",
            quantity: 0,
            unit: ""
        },

        {
            reference: "Lamination",
            name: "Lamination",
            quantity: 0,
            unit: ""
        }

    ],



    /* =================================================
       G145
    ================================================= */

    "G145": [

        {
            reference: "Shell LW + WW",
            name: "Shell LW + WW",
            quantity: 0,
            unit: ""
        },

        {
            reference: "LE Web + TE Web",
            name: "LE Web + TE Web",
            quantity: 0,
            unit: ""
        },

        {
            reference: "Caps",
            name: "Caps",
            quantity: 0,
            unit: ""
        }

    ],



    /* =================================================
       G170
    ================================================= */

    "G170": [

        {
            reference: "Shell LW + WW",
            name: "Shell LW + WW",
            quantity: 0,
            unit: ""
        },

        {
            reference: "LE Web + TE Web",
            name: "LE Web + TE Web",
            quantity: 0,
            unit: ""
        },

        {
            reference: "Caps",
            name: "Caps",
            quantity: 0,
            unit: ""
        }

    ]

};


/* =====================================================
   CHANGE POSTE
===================================================== */

function changePoste() {


    const poste =
        document.getElementById("poste").value;


    const responsableCard =
        document.getElementById(
            "responsableCard"
        );


    const responsable =
        document.getElementById(
            "responsable"
        );


    const projectCard =
        document.getElementById(
            "projectCard"
        );


    const project =
        document.getElementById(
            "project"
        );


    const invoiceContainer =
        document.getElementById(
            "invoiceContainer"
        );


    /* Reset */

    responsable.innerHTML =
        '<option value="">-- Choisir --</option>';


    project.value = "";


    projectCard.classList.add(
        "hidden"
    );


    invoiceContainer.classList.add(
        "hidden"
    );


    if (!poste) {

        responsableCard.classList.add(
            "hidden"
        );

        return;

    }


    responsableCard.classList.remove(
        "hidden"
    );


    let liste = [];


    /* =================================================
       POSTE 450
    ================================================= */

    if (poste === "450") {


        document.getElementById(
            "responsableTitle"
        ).innerText =
            "2. Team Leader";


        document.getElementById(
            "responsableLabel"
        ).innerText =
            "Team Leader";


        liste = teamLeaders;

    }


    /* =================================================
       POSTE 402
    ================================================= */

    if (poste === "402") {


        document.getElementById(
            "responsableTitle"
        ).innerText =
            "2. Coordinateur";


        document.getElementById(
            "responsableLabel"
        ).innerText =
            "Coordinateur";


        liste = coordinateurs;

    }


    /* =================================================
       ADD PEOPLE
    ================================================= */

    liste.forEach(
        function (person) {


            const option =
                document.createElement(
                    "option"
                );


            option.value =
                person;


            option.textContent =
                person;


            responsable.appendChild(
                option
            );

        }
    );

}


/* =====================================================
   CHANGE RESPONSABLE
===================================================== */

function changeResponsable() {


    const responsable =
        document.getElementById(
            "responsable"
        ).value;


    const projectCard =
        document.getElementById(
            "projectCard"
        );


    const invoiceContainer =
        document.getElementById(
            "invoiceContainer"
        );


    if (responsable) {


        projectCard.classList.remove(
            "hidden"
        );


    } else {


        projectCard.classList.add(
            "hidden"
        );


        invoiceContainer.classList.add(
            "hidden"
        );

    }

}


/* =====================================================
   GENERATE INVOICE
===================================================== */

function generateInvoice() {


    const poste =
        document.getElementById(
            "poste"
        ).value;


    const responsable =
        document.getElementById(
            "responsable"
        ).value;


    const project =
        document.getElementById(
            "project"
        ).value;


    const invoiceContainer =
        document.getElementById(
            "invoiceContainer"
        );


    if (
        !poste ||
        !responsable ||
        !project
    ) {


        invoiceContainer.classList.add(
            "hidden"
        );


        return;

    }


    /* =================================================
       INFORMATION
    ================================================= */

    document.getElementById(
        "invoicePoste"
    ).innerText =
        "Poste " + poste;


    document.getElementById(
        "invoiceResponsable"
    ).innerText =
        responsable;


    document.getElementById(
        "invoiceProject"
    ).innerText =
        project;


    /* =================================================
       DATE + TIME
    ================================================= */

    updateDateTime();


    /* =================================================
       MATERIALS
    ================================================= */

    const materials =
        materialDatabase[project] || [];


    const body =
        document.getElementById(
            "materialBody"
        );


    body.innerHTML = "";


    materials.forEach(
        function (
            material,
            index
        ) {


            const row =
                document.createElement(
                    "tr"
                );


            const quantity =
                material.quantity > 0
                    ? material.quantity
                    : "-";


            const unit =
                material.unit
                    ? material.unit
                    : "-";


            row.innerHTML = `

                <td>
                    ${index + 1}
                </td>

                <td>
                    ${material.reference}
                </td>

                <td>
                    ${material.name}
                </td>

                <td>
                    ${quantity}
                </td>

                <td>
                    ${unit}
                </td>

            `;


            body.appendChild(
                row
            );

        }
    );


    /* =================================================
       TOTAL REFERENCES
    ================================================= */

    document.getElementById(
        "totalReferences"
    ).innerText =
        materials.length;


    /* =================================================
       SHOW INVOICE
    ================================================= */

    invoiceContainer.classList.remove(
        "hidden"
    );

}


/* =====================================================
   DATE + TIME
===================================================== */

function updateDateTime() {


    const now =
        new Date();


    const date =
        now.toLocaleDateString(
            "fr-FR"
        );


    const time =
        now.toLocaleTimeString(
            "fr-FR",
            {

                hour: "2-digit",

                minute: "2-digit"

            }
        );


    document.getElementById(
        "invoiceDate"
    ).innerText =
        date;


    document.getElementById(
        "invoiceTime"
    ).innerText =
        time;

}


/* =====================================================
   DOWNLOAD INVOICE
===================================================== */

function downloadInvoice() {


    updateDateTime();


    /*
       Sur Android, cette fonction ouvre
       la fenêtre d'impression.

       Ensuite l'utilisateur peut choisir :

       "Enregistrer au format PDF"

       pour sauvegarder la facture.
    */


    window.print();

}


/* =====================================================
   PRINT INVOICE
===================================================== */

function printInvoice() {


    updateDateTime();


    window.print();

}
