<?php

// A MINOR SCALE
$scale = array(

  //NFr 0  1  2  3  4  5  6  7  8  9  10  11
  array(1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0),
  array(0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0),
  array(1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0),
  array(1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0),
  array(1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0),
  array(1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0),
);
$strings = array('E', 'A', 'D', 'G', 'B', 'e');

// Fill a blank result array
$result = array();
for ($i = 0; $i < count($strings); $i++) {
  $oneStringArray = array();
  $oneStringArray[] = array_reverse($strings)[$i];
  $oneStringArray[] = '|';
  for ($j = 0; $j < 150; $j++) {
    $oneStringArray[] = '-';
  }
  $result[] = $oneStringArray;
}

// Prend une note aléatoire avec une distance de deux max
function pickARandomNote(int $posXLast, int $posYLast, array $scale)
{
  $positions = array();

  // Parcourir le tableau $scale et enregistrer les positions des "1" respectant la contrainte de distance
  for ($i = 0; $i < count($scale); $i++) {
    for ($j = 0; $j < count($scale[$i]); $j++) {
      if ($scale[$i][$j] == 1 && abs($i - $posYLast) <= 2 && abs($j - $posXLast) <= 2) {
        $positions[] = array($i, $j);
      }
    }
  }

  // Sélectionner aléatoirement une position parmi les positions enregistrées
  $randomIndex = array_rand($positions);
  $randomNotePosition = $positions[$randomIndex];

  return $randomNotePosition;
}

// generate start notes
$posY = rand(0, 5);
$posX = rand(0, count($scale[0]));

// generate tab
// for the leght of a string array of the result array
for ($noteIndex = 3; $noteIndex < count($result[0]); $noteIndex += 6) {

  // generate a new note
  $newNote = pickARandomNote($posX, $posY, $scale);

  // get the pos
  $posY = $newNote[0];
  $posX = $newNote[1];

  //write it
  $result[$posY][$noteIndex] = $posX;
}

?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GENERATE</title>
</head>

<body>

  <?php

  // Affichage
  foreach ($result as $line) {
    foreach ($line as $note) {
      echo $note;
    }
    echo "<br>";
  }

  ?>
</body>

</html>