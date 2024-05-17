import examen from "../controllers/examen.js";

test('PRUEBA DE VALORES',()=>{
    expect(examen(8)).toBe("El valor es 10 o menor.", 28);                   //VALOR 8
    expect(examen(11)).toBe("El valor es mayor que 10 y es impar.", 55);     //VALOR 11  
    expect(examen(12)).toBe("El valor es mayor que 10 y es par.", 66);       //VALOR 12
});

/*CAMINOS
comando para pruebas:
npm run coverage

•	Ruta 1:
•	𝐼→𝑝1→𝑝2→𝑝3→𝑝6→𝑝8→𝐹I→p1→p2→p3→p6→p8→F
•	Ruta 2:
•	𝐼→𝑝1→𝑝2→𝑝4→𝑝6→𝑝8→𝐹I→p1→p2→p4→p6→p8→F
•	Ruta 3:
•	𝐼→𝑝1→𝑝4→𝑝6→𝑝8→𝐹I→p1→p4→p6→p8→F
•	Ruta 4 
•	𝐼→𝑝1→𝑝2→𝑝4→𝑝6→𝑝7→𝑝6→𝑝8→𝐹I→p1→p2→p4→p6→p7→p6→p8→F
•	Ruta 5 
•	𝐼→𝑝1→𝑝4→𝑝6→𝑝7→𝑝6→𝑝8→𝐹I→p1→p4→p6→p7→p6→p8→F
•	Ruta 6 
•	𝐼→𝑝1→𝑝2→𝑝3→𝑝6→𝑝7→𝑝6→𝑝8→𝐹I→p1→p2→p3→p6→p7→p6→p8→F


https://www.plantuml.com/plantuml/uml/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000

PLANTUML
@startuml
digraph foo {
  node [style=rounded]
  I[fillcolor=yellow]
  F[fillcolor=yellow]
  
  I -> p1
  
  p1 -> p2
  p1 -> p4
  p2 -> p4
  p2 -> p3
  p3 -> p6
  p4 -> p6
  p6 -> p7
  p7 -> p6
  p6 -> p8
  
  p8 -> F
}
@enduml
*/
