const COMPANY_NAME = "Avaniysh Interior Solutions (OPC) Pvt. Ltd.";
const LOGO_URL = "Avaniysh Logo.png"; 
const VIDEOS = [
  // Flooring / Tiles
  {
    title: "Installing Interface Carpet Tile with TacTiles",
    url: "https://www.youtube.com/watch?v=oP4RMcRI4fc",
    category: "Flooring / Tiles",
    level: "Beginner",
  },
  {
    title: "What are carpet tiles? And how to install them yourself",
    url: "https://www.youtube.com/watch?v=y6SX3_tl6fQ&list=PLop1RNOdgcXXkawOgEZyF7X2jBRjMYy3P",
    category: "Flooring / Tiles",
    level: "Beginner",
  },
  {
    title: "Tarkett DESSO SoundMaster installation",
    url: "https://www.youtube.com/watch?v=b_F6I6YoFm8",
    category: "Flooring / Tiles",
    level: "Advanced",
  },
  {
    title: "Complete Tile Laying Guide | Floor & Wall Installation with Gresbond",
    url: "https://www.youtube.com/watch?v=A7mvO6w3zxs",
    category: "Flooring / Tiles",
    level: "Beginner",
  },

  // Vinyl Flooring
  {
    title: "LVT: ProGen Installation Guide | Tarkett Home",
    url: "https://www.youtube.com/watch?v=CCzITjPe7pw",
    category: "Vinyl Flooring",
    level: "Medium",
  },
  {
    title: "How to: Install Vinyl Flooring",
    url: "https://www.youtube.com/watch?v=t8g3HnLcH6Q",
    category: "Vinyl Flooring",
    level: "Beginner",
  },
  {
    title: "How to install iD Inspiration Glue-down vinyl tiles - Tarkett",
    url: "https://www.youtube.com/watch?v=k8soJlPUig8",
    category: "Vinyl Flooring",
    level: "Medium",
  },
  {
    title: "Virtuo 55 Glue Down - Installation guidelines for Virtuo Tiles & Planks",
    url: "https://www.youtube.com/watch?v=Wufa4nxT3mc",
    category: "Vinyl Flooring",
    level: "Medium",
  },
  {
    title: "How to Install Commercial LVT",
    url: "https://www.youtube.com/watch?v=TYHEpQgrI8A",
    category: "Vinyl Flooring",
    level: "Advanced",
  },
  {
    title: "Commercial Vinyl Flooring Installation",
    url: "https://www.youtube.com/watch?v=MH9_8xAu59c",
    category: "Vinyl Flooring",
    level: "Advanced",
  },
  {
    title: "Vinyl Flooring Installation Video",
    url: "https://www.youtube.com/watch?v=ttBKNbJPL1c",
    category: "Vinyl Flooring",
    level: "Medium",
  },

  // Paints
  {
    title: "Painting Exterior Floors with Apex Floor Guard | Homework by Asian Paints",
    url: "https://www.youtube.com/watch?v=zw-S4eG0nfk",
    category: "Paints",
    level: "Medium",
  },
  {
    title: "How to Paint Your Walls",
    url: "https://www.youtube.com/watch?v=znfmOKq5yLI",
    category: "Paints",
    level: "Beginner",
  },
  {
    title: "How to Paint Metal",
    url: "https://www.youtube.com/watch?v=qb2j2usQLOQ&t=45s",
    category: "Paints",
    level: "Medium",
  },
//   {
//     title: "How-To-Video Gallery for Your Painting Journey - Asian Paints",
//     url: "https://www.asianpaints.com/resources/how-to-videos.html",
//     category: "Paints",
//     level: "Beginner",
//   },
  {
    title: "Paint Preparation and Application Video",
    url: "https://www.youtube.com/watch?v=E_w1kC0x1E8",
    category: "Paints",
    level: "Medium",
  },
  {
    title: "Asian Paints - Wall, Wood and Metal Painting Tutorials",
    url: "https://youtube.com/playlist?list=PL2BHpqroisHYLP2PeR4vTYoH68ibek_DC&si=nS-hQZAbqqx7auPa",
    category: "Paints",
    level: "Beginner",
  },
  {
    title: "How to Prepare Your Walls for Painting",
    url: "https://www.youtube.com/watch?v=6GnAkS3_5Lk&list=PL2BHpqroisHYLP2PeR4vTYoH68ibek_DC&index=2",
    category: "Paints",
    level: "Beginner",
  },
  {
    title: "How to Paint Wood",
    url: "https://www.youtube.com/watch?v=6lcJl1dQo9A&list=PL2BHpqroisHYLP2PeR4vTYoH68ibek_DC&index=4",
    category: "Paints",
    level: "Medium",
  },
  {
    title: "Berger Paints Silk Illusions - Metallica Finish",
    url: "https://www.youtube.com/watch?v=ZjSjbvcQFmY&list=PLLQtHmKd1Sw371oa51ORlAynXsEY2B4Cg",
    category: "Paints",
    level: "Advanced",
  },
  {
    title: "Berger Silk Illusions - Marble Finish",
    url: "https://www.youtube.com/watch?v=_23v2a91f1k&list=PLLQtHmKd1Sw371oa51ORlAynXsEY2B4Cg&index=3",
    category: "Paints",
    level: "Advanced",
  },
  {
    title: "Berger Silk Illusions - Non Metallic Finish",
    url: "https://www.youtube.com/watch?v=gRWqcLCx-N4&list=PLLQtHmKd1Sw371oa51ORlAynXsEY2B4Cg&index=2",
    category: "Paints",
    level: "Advanced",
  },
  {
    title: "Nippon Paint India - Painting Tutorials",
    url: "https://youtube.com/playlist?list=PLJPE9b1G2GdUquJZxQmZkVoBAZzQhJoBs&si=Mc9dOP0JlYSm8e9v",
    category: "Paints",
    level: "Beginner",
  },

  // Laminates / MDF
  {
    title: "Storage, Handling & Usage of Greenpanel MDF",
    url: "https://www.youtube.com/watch?v=5Ziqsp1xY3U&list=PLfRO31COhG1f6DpN6g30eh_J6xAIKOMfj&index=11",
    category: "Laminates",
    level: "Beginner",
  },
  {
    title: "Cutting & Routing of Greenpanel MDF",
    url: "https://www.youtube.com/watch?v=URrp_Z3ccKQ&list=PLfRO31COhG1f6DpN6g30eh_J6xAIKOMfj&index=12",
    category: "Laminates",
    level: "Advanced",
  },
  {
    title: "Decorative Finish in Greenpanel MDF",
    url: "https://www.youtube.com/watch?v=gpOKCOdSCNM&list=PLfRO31COhG1f6DpN6g30eh_J6xAIKOMfj&index=13",
    category: "Laminates",
    level: "Medium",
  },
  {
    title: "Greenpanel MDF Installation Tutorial",
    url: "https://www.youtube.com/watch?v=0man_H2kWbI&list=PLfRO31COhG1f6DpN6g30eh_J6xAIKOMfj&index=15",
    category: "Laminates",
    level: "Medium",
  },
  {
    title: "Screwing & Joinery in Greenpanel MDF",
    url: "https://www.youtube.com/watch?v=jKnuY4IxUsk&list=PLfRO31COhG1f6DpN6g30eh_J6xAIKOMfj&index=16",
    category: "Laminates",
    level: "Advanced",
  },

  // Ceiling Installation
  {
    title: "Step by Step Installation Process of Gyproc Grid Ceiling | Saint-Gobain",
    url: "https://www.youtube.com/watch?v=bdCmO39L9_g",
    category: "Ceiling Installation",
    level: "Medium",
  },
  {
    title: "Gyproc Ceilings Installation | Gyproc Plasterboard Ceilings - Hindi",
    url: "https://www.youtube.com/watch?v=-0xM58420GA",
    category: "Ceiling Installation",
    level: "Medium",
  },
  {
    title: "Gypliner Wall Lining System by Gyproc",
    url: "https://www.youtube.com/watch?v=7jSJjfnmnoE&list=PLlz0CQEBv14uHibziIAmIYSf01pPsKj5y",
    category: "Ceiling Installation",
    level: "Advanced",
  },
  {
    title: "Step by Step Installation Process of Gyproc Drywalls | Saint-Gobain",
    url: "https://www.youtube.com/watch?v=_-4zqm_n9jk",
    category: "Ceiling Installation",
    level: "Medium",
  },
  {
    title: "Double Layer Drywall",
    url: "https://www.youtube.com/watch?v=ORhV5Jya8ms",
    category: "Ceiling Installation",
    level: "Advanced",
  },
  {
    title: "Step by Step Process of Door Opening Junction While Installing Drywall",
    url: "https://www.youtube.com/watch?v=BZrr46nDZYA",
    category: "Ceiling Installation",
    level: "Advanced",
  },
  {
    title: "How to Create a Sliding Door Using Drywall System - Gyproc Saint-Gobain",
    url: "https://www.youtube.com/watch?v=ua_iIZHAoiM",
    category: "Ceiling Installation",
    level: "Advanced",
  },
  {
    title: "Step by Step Installation Process of Secure Wall | Gyproc Drywalls",
    url: "https://www.youtube.com/watch?v=nDz7JbO65LI",
    category: "Ceiling Installation",
    level: "Advanced",
  },
  {
    title: "How to Easily Repair Gypsum Board",
    url: "https://www.youtube.com/watch?v=IZqLUasx6cs",
    category: "Ceiling Installation",
    level: "Beginner",
  },
  {
    title: "Plain False Ceiling Installation | Plasterboard Ceiling Installation Process",
    url: "https://www.youtube.com/watch?v=6kYeITXHAAo",
    category: "Ceiling Installation",
    level: "Medium",
  },
  {
    title: "How to Install Acoustical Ceilings | Armstrong Ceiling Solutions",
    url: "https://www.youtube.com/watch?v=UcYBSL2c9Nw",
    category: "Ceiling Installation",
    level: "Medium",
  },
  {
    title: "Fastest Drywall Ceiling Installations | Armstrong Ceiling Solutions",
    url: "https://www.youtube.com/watch?v=bYyxv0uqV1E&list=PLTXm2B4LvsdQnpGhUXa2XKtJJssLtct8X&index=2",
    category: "Ceiling Installation",
    level: "Advanced",
  },
  {
    title: "Cutting Molding and Using Templates | Armstrong Ceiling Solutions",
    url: "https://www.youtube.com/watch?v=kABHWiiYmcE&list=PLTXm2B4LvsdQnpGhUXa2XKtJJssLtct8X&index=4",
    category: "Ceiling Installation",
    level: "Advanced",
  },
  {
    title: "Constructing Curved Ceilings With Drywall Grid | Armstrong Ceiling Solutions",
    url: "https://www.youtube.com/watch?v=znqo0mcXXfU&list=PLTXm2B4LvsdQnpGhUXa2XKtJJssLtct8X&index=5",
    category: "Ceiling Installation",
    level: "Advanced",
  },
  {
    title: "Armstrong World Industries - Ceiling Installation Tutorials",
    url: "https://youtube.com/playlist?list=PLTXm2B4LvsdQnpGhUXa2XKtJJssLtct8X&si=zb_HyCVFWLd_mj3H",
    category: "Ceiling Installation",
    level: "Medium",
  },

  // Acoustic
  {
    title: "The Best of Spaces4 - WFH Acoustics",
    url: "https://www.youtube.com/watch?v=vXEu5zCbIHs",
    category: "Acoustic",
    level: "Beginner",
  },
  {
    title: "Cara Wall Panel Installation Guide | Senses Akustik",
    url: "https://www.youtube.com/watch?v=mzWRfI73P7w",
    category: "Acoustic",
    level: "Medium",
  },

  // Sanitary / Water Fixtures
  {
    title: "Kohler Smart Care | Health Faucet Installation",
    url: "https://www.youtube.com/watch?v=etOmOvo3G68",
    category: "Sanitary / Water Fixtures",
    level: "Beginner",
  },
  {
    title: "Kohler Vive Tall Mixer Faucet Installation",
    url: "https://www.youtube.com/watch?v=TbwM6hqwd6I",
    category: "Sanitary / Water Fixtures",
    level: "Medium",
  },
  {
    title: "Kohler India - Toilet Installation Tutorials",
    url: "https://youtube.com/playlist?list=PLQ1GJy59IH1o&si=pXIdSzEbiIZG1LsB",
    category: "Sanitary / Water Fixtures",
    level: "Beginner",
  },
  {
    title: "CERA Sanitaryware - Product Installation Guides",
    url: "https://youtube.com/playlist?list=PL_5hbAw3-zx8pcOU-TQlnFS8gipYn5I0P&si=Bj9o0DatoSJAz9aX",
    category: "Sanitary / Water Fixtures",
    level: "Beginner",
  },
  {
    title: "Cera Tiles Laying with StyleFix",
    url: "https://www.youtube.com/watch?v=oySv6I3_hXw&list=PL_5hbAw3-zx8pcOU-TQlnFS8gipYn5I0P&index=1",
    category: "Sanitary / Water Fixtures",
    level: "Medium",
  },
  {
    title: "Touch Tap - A Revolutionary Discovery From CERA",
    url: "https://www.youtube.com/watch?v=I94-NIxYLYo&list=PL_5hbAw3-zx8pcOU-TQlnFS8gipYn5I0P&index=2",
    category: "Sanitary / Water Fixtures",
    level: "Beginner",
  },
  {
    title: "CERA - CZAR Steam Shower Room - Installation",
    url: "https://www.youtube.com/watch?v=luK-Hl9d8HY&list=PL_5hbAw3-zx8pcOU-TQlnFS8gipYn5I0P&index=3",
    category: "Sanitary / Water Fixtures",
    level: "Advanced",
  },
  {
    title: "CERA - Concealed Cistern - Installation",
    url: "https://www.youtube.com/watch?v=1gvSC32iiUs&list=PL_5hbAw3-zx8pcOU-TQlnFS8gipYn5I0P&index=4",
    category: "Sanitary / Water Fixtures",
    level: "Advanced",
  },
  {
  title: "Asahi India Glass Ltd. - Glass Partition Installation",
  url: "https://youtube.com/playlist?list=PLhK2sr6Vk-L9BkhKNJOBi0frO5EzyE_em&si=Awq1SRKYQgjoD-_O",
  category: "Glass Partition",
  level: "Advanced",
},
{
  title: "CGP - Installation Glass Partition System",
  url: "https://www.youtube.com/watch?v=1ZPpmsHWMXY",
  category: "Glass Partition",
  level: "Advanced",
},
{
  title: "CGP's Installation Video Guide - Glass Conference Room",
  url: "https://www.youtube.com/watch?v=0YgNEXbkPfo",
  category: "Glass Partition",
  level: "Advanced",
},
{
  title: "How To - Install KOMPAS Aluminum and Glass Partition by Crystalia Glass",
  url: "https://www.youtube.com/watch?v=xmgy-OBf3S8&list=PLmegj89G5H4YVI2VT0f4ThTuJfmxjupU6",
  category: "Glass Partition",
  level: "Advanced",
},
{
  title: "How to Install TREVI Steel Partition with Double Swing Doors",
  url: "https://www.youtube.com/watch?v=8fWo7ruy04s",
  category: "Glass Partition",
  level: "Advanced",
},
{
  title: "CLIP-IN Installation EN - GLASSOLUTIONS Saint-Gobain",
  url: "https://www.youtube.com/watch?v=8fWo7ruy04s",
  category: "Glass Partition",
  level: "Advanced",
},

{
  title: "RB 500 Manual Roller Shade with Standard Duty + Brackets - Inside Mount",
  url: "https://vimeo.com/352506490?fl=pl&fe=vl",
  category: "Blinds",
  level: "Intermediate",
},
{
  title: "RB 500 Manual Roller Shade with Standard Duty+ Brackets - Outside Mount",
  url: "https://vimeo.com/352506733?fl=pl&fe=vl",
  category: "Blinds",
  level: "Intermediate",
},
{
  title: "RB 500+ Manual Roller Shade with Heavy Duty Brackets - Inside Mount",
  url: "https://vimeo.com/349733081?fl=pl&fe=vl",
  category: "Blinds",
  level: "Intermediate",
},
{
  title: "RB 500 Manual Roller Shade with Standard Duty+ Clutch and Brackets and 3-inch Fascia - Inside Mount",
  url: "https://vimeo.com/352506985?fl=pl&fe=vl",
  category: "Blinds",
  level: "Advanced",
},
{
  title: "RB 500 Manual Roller Shade with Heavy Duty+ Clutch and Brackets and 4-inch Fascia - Outside Mount",
  url: "https://vimeo.com/350218172?fl=pl&fe=vl",
  category: "Blinds",
  level: "Advanced",
},

];


const LEVELS = ["Beginner", "Medium", "Advanced"];
const LEVEL_COLOR = {
  Beginner: "var(--beginner)",
  Medium: "var(--medium)",
  Advanced: "var(--advanced)",
};
const state = { category: "All", levels: new Set(), query: "" };
const $ = (id) => document.getElementById(id);

function getVideoId(url) {
  const m = String(url).match(
    /(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([A-Za-z0-9_-]{11})/,
  );
  return m ? m[1] : "";
}

// Link cha prakar olakhto:
//   video    -> youtube.com/watch?v=...  (list=... asel tar playlist madhla video)
//   playlist -> youtube.com/playlist?list=...
//   link     -> kontahi dusri website / YouTube channel (popup madhe chalat nahi, navin tab madhe ughadto)
function parseLink(url) {
  let u;
  try {
    u = new URL(String(url).trim());
  } catch (err) {
    return { type: "link" };
  }
  const host = u.hostname.replace(/^(www|m|music)\./, "");
  if (!["youtube.com", "youtu.be", "youtube-nocookie.com"].includes(host))
    return { type: "link" };

  const list = u.searchParams.get("list") || "";
  let id = "";
  if (host === "youtu.be") id = u.pathname.slice(1, 12);
  else if (u.pathname === "/watch") id = u.searchParams.get("v") || "";
  else {
    const m = u.pathname.match(/^\/(?:embed|shorts|live)\/([A-Za-z0-9_-]{11})/);
    if (m) id = m[1];
  }
  if (id) return { type: "video", id, list };
  if (u.pathname === "/playlist" && list) return { type: "playlist", list };
  return { type: "link" };
}

// Playlist / website cards sathi placeholder thumbnail cha style (style.css madhe badal nako)
(function () {
  const st = document.createElement("style");
  st.textContent = `
    .ph{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;
        background:linear-gradient(135deg,#2b2b2b,#111);color:#fff;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
    .ph svg{width:44px;height:44px;color:var(--brand)}
    .kind{position:absolute;right:10px;top:10px;z-index:2;padding:4px 10px;border-radius:999px;background:var(--brand);color:#111;font-size:11.5px;font-weight:700}
  `;
  document.head.appendChild(st);
})();

const ICON_PLAYLIST =
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h12v2H3zm0 4h12v2H3zm0 4h8v2H3zm13-4v8l6-4z"/></svg>';
const ICON_LINK =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 14a4 4 0 0 0 5.6 0l3-3a4 4 0 0 0-5.6-5.6l-1 1"/><path d="M14 10a4 4 0 0 0-5.6 0l-3 3a4 4 0 0 0 5.6 5.6l1-1"/></svg>';
function esc(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
}

$("logoBox").innerHTML = LOGO_URL
  ? `<img src="${esc(LOGO_URL)}" alt="${esc(COMPANY_NAME)}">`
  : esc(COMPANY_NAME);
$("yr").textContent = new Date().getFullYear();


function renderStats() {
  const cats = new Set(VIDEOS.map((v) => v.category)).size;
  const lv = (l) => VIDEOS.filter((v) => v.level === l).length;
  $("stats").innerHTML =
    `<div class="stat"><b>${VIDEOS.length}</b><span>Videos</span></div>` +
    `<div class="stat"><b>${cats}</b><span>Categories</span></div>` +
    LEVELS.map(
      (l) =>
        `<div class="stat"><b>${lv(l)}</b><span><i style="background:${LEVEL_COLOR[l]}"></i>${l}</span></div>`,
    ).join("");
  LEVELS.forEach((l) => {
    const n = document.querySelector(`[data-n="${l}"]`);
    if (n) n.textContent = lv(l);
  });
}


function renderChips() {
  const cats = ["All", ...new Set(VIDEOS.map((v) => v.category))];
  $("chips").innerHTML = cats
    .map((c) => {
      const n =
        c === "All"
          ? VIDEOS.length
          : VIDEOS.filter((v) => v.category === c).length;
      return `<button class="chip ${c === state.category ? "active" : ""}" role="tab" aria-selected="${c === state.category}" data-cat="${esc(c)}">${esc(c)} <em>${n}</em></button>`;
    })
    .join("");
}
$("chips").addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (!b) return;
  state.category = b.dataset.cat;
  renderChips();
  renderGrid();
});


const panel = $("filterPanel");
$("filterBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  const open = panel.classList.toggle("open");
  $("filterBtn").setAttribute("aria-expanded", open);
});
panel.addEventListener("click", (e) => e.stopPropagation());
document.addEventListener("click", () => {
  panel.classList.remove("open");
  $("filterBtn").setAttribute("aria-expanded", false);
});
panel.querySelectorAll("input[type=checkbox]").forEach((cb) => {
  cb.addEventListener("change", () => {
    cb.checked
      ? state.levels.add(cb.value)
      : state.levels.delete(cb.value);
    renderGrid();
  });
});
$("clearLevels").addEventListener("click", () => {
  state.levels.clear();
  syncLevelChecks();
  renderGrid();
});
function syncLevelChecks() {
  panel
    .querySelectorAll("input[type=checkbox]")
    .forEach((cb) => (cb.checked = state.levels.has(cb.value)));
}


$("search").addEventListener("input", (e) => {
  state.query = e.target.value.trim().toLowerCase();
  renderGrid();
});

function resetAll() {
  state.category = "All";
  state.levels.clear();
  state.query = "";
  $("search").value = "";
  syncLevelChecks();
  renderChips();
  renderGrid();
}
$("resetAll").addEventListener("click", resetAll);
$("emptyReset").addEventListener("click", resetAll);

$("pills").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-clear]");
  if (!b) return;
  const k = b.dataset.clear,
    v = b.dataset.val;
  if (k === "cat") state.category = "All";
  if (k === "lvl") state.levels.delete(v);
  if (k === "q") {
    state.query = "";
    $("search").value = "";
  }
  syncLevelChecks();
  renderChips();
  renderGrid();
});

function renderGrid() {
  const list = VIDEOS.filter(
    (v) =>
      (state.category === "All" || v.category === state.category) &&
      (state.levels.size === 0 || state.levels.has(v.level)) &&
      (!state.query ||
        (v.title + " " + v.category + " " + v.level)
          .toLowerCase()
          .includes(state.query)),
  );

  $("grid").innerHTML = list
    .map((v) => {
      const i = VIDEOS.indexOf(v);
      const k = parseLink(v.url);
      const media =
        k.type === "video"
          ? `<img loading="lazy" src="https://img.youtube.com/vi/${k.id}/hqdefault.jpg" alt="" onerror="this.style.display='none'">`
          : k.type === "playlist"
            ? `<div class="ph">${ICON_PLAYLIST}Playlist</div>`
            : `<div class="ph">${ICON_LINK}Website</div>`;
      const badge =
        k.type === "playlist"
          ? '<span class="kind">Playlist</span>'
          : k.type === "link"
            ? '<span class="kind">Link</span>'
            : "";
      return `
<button class="card" data-i="${i}" aria-label="Open: ${esc(v.title)}">
  <div class="thumb">
    ${media}
    <span class="lvl ${esc(v.level)}">${esc(v.level)}</span>
    ${badge}
    ${k.type === "video" ? '<span class="play"></span>' : ""}
  </div>
  <div class="info">
    <div class="cat">${esc(v.category)}</div>
    <div class="title">${esc(v.title)}</div>
  </div>
</button>`;
    })
    .join("");

  $("count").innerHTML =
    `Showing <b>${list.length}</b> of ${VIDEOS.length} videos`;
  const pills = [];
  if (state.category !== "All")
    pills.push(
      `<span class="pill">${esc(state.category)}<button data-clear="cat" aria-label="Remove category filter">&times;</button></span>`,
    );
  state.levels.forEach((l) =>
    pills.push(
      `<span class="pill">${esc(l)}<button data-clear="lvl" data-val="${esc(l)}" aria-label="Remove ${esc(l)} filter">&times;</button></span>`,
    ),
  );
  if (state.query)
    pills.push(
      `<span class="pill">&ldquo;${esc(state.query)}&rdquo;<button data-clear="q" aria-label="Clear search">&times;</button></span>`,
    );
  $("pills").innerHTML = pills.join("");
  $("resetAll").style.display = pills.length ? "inline" : "none";

  $("filterBadge").textContent = state.levels.size;
  $("filterBtn").classList.toggle("has-filter", state.levels.size > 0);

  $("empty").style.display = list.length ? "none" : "block";
  $("grid").style.display = list.length ? "grid" : "none";
}

let lastFocus = null;
$("grid").addEventListener("click", (e) => {
  const c = e.target.closest(".card");
  if (!c) return;
  const v = VIDEOS[+c.dataset.i];
  if (!v) return;
  const k = parseLink(v.url);

  // Website / channel link -> direct navin tab madhe ughadto
  // file:// (double-click kelela page) madhe YouTube embed block hoto (Error 153) mhanun tithe pan direct YouTube la jato
  if (k.type === "link" || location.protocol === "file:") {
    window.open(v.url, "_blank", "noopener");
    return;
  }

  // Hosted website var video / playlist popup madhech suru hoto
  const origin = `&origin=${encodeURIComponent(location.origin)}`;
  const src =
    k.type === "playlist"
      ? `https://www.youtube.com/embed/videoseries?list=${k.list}&autoplay=1&rel=0${origin}`
      : `https://www.youtube.com/embed/${k.id}?autoplay=1&rel=0${k.list ? "&list=" + k.list : ""}${origin}`;

  lastFocus = c;
  $("ytLink").href = v.url;
  $("player").src = src;
  $("modalTitle").textContent = v.title;
  $("modalCat").textContent = v.category;
  $("modalLvl").textContent = v.level;
  $("modalLvl").className = "mtag " + v.level;
  $("modal").classList.add("open");
  $("closeModal").focus();
});
function closeModal() {
  $("modal").classList.remove("open");
  $("player").src = "";
  if (lastFocus) lastFocus.focus();
}
$("closeModal").addEventListener("click", closeModal);
$("modal").addEventListener("click", (e) => {
  if (e.target === $("modal")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

renderStats();
renderChips();
renderGrid();
