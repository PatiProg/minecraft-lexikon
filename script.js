const potions = [
  {
    name: "Stärke",
    effect: "Erhöht Nahkampfschaden",
    base: "blaze_powder",
    normal: "3:00",
    extended: "8:00",
    upgraded: "1:30",
    ingredient: "Lohenstaub",
  },
  {
    name: "Schnelligkeit",
    effect: "Erhöht Laufgeschwindigkeit",
    base: "sugar",
    normal: "3:00",
    extended: "8:00",
    upgraded: "1:30",
    ingredient: "Zucker",
  },
  {
    name: "Heilung",
    effect: "Heilt sofort Lebenspunkte",
    base: "glistering_melon",
    normal: "sofort",
    extended: "sofort",
    upgraded: "sofort",
    ingredient: "Glitzer-Melone",
  },
  {
    name: "Regeneration",
    effect: "Heilt über Zeit",
    base: "ghast_tear",
    normal: "0:45",
    extended: "1:30",
    upgraded: "0:22",
    ingredient: "Ghast-Träne",
  },
  {
    name: "Feuerresistenz",
    effect: "Schützt vor Feuer & Lava",
    base: "magma_cream",
    normal: "3:00",
    extended: "8:00",
    upgraded: "3:00",
    ingredient: "Magmakrem",
  },
  {
    name: "Unsichtbarkeit",
    effect: "Mach dich unsichtbar",
    base: "golden_carrot",
    normal: "3:00",
    extended: "8:00",
    upgraded: "3:00",
    ingredient: "Goldene Karotte",
  },
  {
    name: "Sprungkraft",
    effect: "Erhöht Sprungweite",
    base: "rabbit_foot",
    normal: "3:00",
    extended: "8:00",
    upgraded: "3:00",
    ingredient: "Hasenfuß",
  },
  {
    name: "Wasseratmung",
    effect: "Atmen unter Wasser",
    base: "pufferfish",
    normal: "3:00",
    extended: "8:00",
    upgraded: "3:00",
    ingredient: "Kugelfisch",
  },
  {
    name: "Schwäche",
    effect: "Verringert Nahkampfschaden",
    base: "fermented_spider_eye",
    normal: "1:30",
    extended: "3:00",
    upgraded: "1:30",
    ingredient: "Gegorene Spinnenauge",
  },
  {
    name: "Gift",
    effect: "Schadet über Zeit",
    base: "spider_eye",
    normal: "0:45",
    extended: "2:00",
    upgraded: "0:22",
    ingredient: "Spinnenauge",
  },
];

const crafting = [
  // Schon vorhandene Rezepte
  {
    name: "Crafting Table",
    grid: [
      ["oak_planks", "oak_planks", null],
      ["oak_planks", "oak_planks", null],
      [null, null, null],
    ],
  },
  {
    name: "Furnace",
    grid: [
      ["cobblestone", "cobblestone", "cobblestone"],
      ["cobblestone", null, "cobblestone"],
      ["cobblestone", "cobblestone", "cobblestone"],
    ],
  },
  {
    name: "Blast Furnace",
    grid: [
      ["iron_ingot", "iron_ingot", "iron_ingot"],
      ["iron_ingot", "furnace", "iron_ingot"],
      ["smooth_stone", "smooth_stone", "smooth_stone"],
    ],
  },
  {
    name: "Smoker",
    grid: [
      [null, "oak_log", null],
      ["oak_log", "furnace", "oak_log"],
      [null, "oak_log", null],
    ],
  },
  {
    name: "Bed",
    grid: [
      [null, null, null],
      ["white_wool", "white_wool", "white_wool"],
      ["oak_planks", "oak_planks", "oak_planks"],
    ],
  },

  // Neue Rezepte
  {
    name: "Grindstone",
    grid: [
      ["stick", "stone_slab", "stick"],
      ["oak_planks", null, "oak_planks"],
      [null, null, null],
    ],
  },
  {
    name: "Enchantment Table",
    grid: [
      [null, "book", null],
      ["diamond", "obsidian", "diamond"],
      ["obsidian", "obsidian", "obsidian"],
    ],
  },
  {
    name: "Bookshelf",
    grid: [
      ["oak_planks", "oak_planks", "oak_planks"],
      ["book", "book", "book"],
      ["oak_planks", "oak_planks", "oak_planks"],
    ],
  },
  {
    name: "Upgrade Template",
    grid: [
      ["netherack", "diamond", "netherack"],
      ["netherack", "upgrade_template", "netherack"],
      ["netherack", "netherack", "netherack"],
    ],
  },
  {
    name: "Shulkerbox",
    grid: [
      [null, "shulker_shell", null],
      [null, "chest", null],
      [null, "shulker_shell", null],
    ],
  },
  {
    name: "Wool",
    grid: [
      ["string", "string", null],
      ["string", "string", null],
      [null, null, null],
    ],
  },
  {
    name: "Fermented Spider Eye",
    grid: [
      [null, null, null],
      ["brown_mushroom", "sugar", null],
      [null, "spider_eye", null],
    ],
  },
];

const list = document.getElementById("list");
const details = document.getElementById("details");

function showPotions() {
  list.innerHTML = "";
  details.innerHTML = "<p>Wähle eine Potion.</p>";

  potions.forEach((potion) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = potion.name;

    div.onclick = () => {
      details.innerHTML = `
        <h2>Potion der ${potion.name}</h2>
        <p>${potion.effect}</p>

        <h3>Brewing</h3>
        <div class="brewing">
          <div class="slot"><img src="./icons/nether_wart.png"></div>
          <div class="slot"><img src="./icons/${potion.base}.png"></div>
          <div class="slot"></div>
        </div>

        <h3>Dauer</h3>
        <ul>
          <li>Normal: ${potion.normal}</li>
          <li>Verlängert (Redstone)</li>
          <li>Verstärkt (Glowstone)</li>
        </ul>
      `;
    };

    list.appendChild(div);
  });
}

function showCrafting() {
  list.innerHTML = "";
  details.innerHTML = "<p>Wähle ein Rezept aus.</p>";

  crafting.forEach((recipe) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = recipe.name;

    div.onclick = () => {
      let gridHTML = `<div class="crafting-grid">`;

      recipe.grid.flat().forEach((cell) => {
        gridHTML += `
          <div class="slot">
            ${cell ? `<img src="./icons/${cell}.png">` : ""}
          </div>
        `;
      });

      gridHTML += `</div>`;
      details.innerHTML = `<h2>${recipe.name}</h2>${gridHTML}`;
    };

    list.appendChild(div);
  });
}

document.getElementById("potionsBtn").onclick = showPotions;
document.getElementById("craftingBtn").onclick = showCrafting;
