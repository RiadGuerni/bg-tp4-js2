"use strict";

function doInsertRowTable(num, nom, prenom, points) {
  const table = document.getElementById("table_body");

  // Creation des element HTML (slide 104).
  const row = document.createElement("tr");

  // Affectation d'attributs (slide 107).
  row.setAttribute("class", "row");

  const col1 = document.createElement("td");
  const col2 = document.createElement("td");
  const col3 = document.createElement("td");
  const col4 = document.createElement("td");
  const col5 = document.createElement("td");
  const checkbox = document.createElement("input");

  // Contenu en texte simples (slide 91).
  col1.innerText = num;
  col2.innerText = nom;
  col3.innerText = prenom;
  col4.innerText = points;
  checkbox.setAttribute("type", "checkbox");

  col1.setAttribute("class", "col_number");
  col2.setAttribute("class", "col_text");
  col3.setAttribute("class", "col_text");
  col4.setAttribute("class", "col_number");
  col5.setAttribute("class", "col_chkbox");

  // Ajout a la fin d'un element (slide 98).
  col5.append(checkbox);
  row.append(col1);
  row.append(col2);
  row.append(col3);
  row.append(col4);
  row.append(col5);
  table.append(row);

  console.log("Ligne ajoutee :", num, nom, prenom, points);
}

// Evenement clic (slide 136).
document.getElementById("btn_add").addEventListener("click", function () {
  doInsertRowTable(99, "nom", "prenom", 10);
});
