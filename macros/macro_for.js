let for = macro {
  rule {
    ($x from $y) { $block ... }
  } => {
    for ($x in $y) { if (!$y.hasOwnProperty($x)) continue;
      $block ...
    }
  }
  rule {
    (var $x from $y) { $block ... }
  } => {
    for (var $x in $y) {
      if (!$y.hasOwnProperty($x)) continue;
      $block ...
    }
  }
  rule {
    ($x from $y) $block:expr;
  } => {
    for ($x in $y) {
      if (!$y.hasOwnProperty($x)) continue;
      $block
    }
  }
  rule {
    (var $x from $y) $block:expr;
  } => {
    for (var $x in $y) {
      if (!$y.hasOwnProperty($x)) continue;
      $block
    }
  }
  rule { ($x...) $b } => { for($x...)$b }
};

export for;
