// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $api_joke from "./routes/api/joke.ts";
import * as $index from "./routes/index.tsx";
import * as $CardWith4ComponentsIsland from "./islands/CardWith4ComponentsIsland.tsx";
import * as $Carousel from "./islands/Carousel.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $Description from "./islands/Description.tsx";
import * as $Description2 from "./islands/Description2.tsx";
import * as $Menu from "./islands/Menu.tsx";
import * as $Modal from "./islands/Modal.tsx";
import * as $ModalContainer from "./islands/ModalContainer.tsx";
import * as $NavMenu from "./islands/NavMenu.tsx";
import * as $NavMenu2 from "./islands/NavMenu2.tsx";
import * as $OfferList from "./islands/OfferList.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/api/joke.ts": $api_joke,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/CardWith4ComponentsIsland.tsx": $CardWith4ComponentsIsland,
    "./islands/Carousel.tsx": $Carousel,
    "./islands/Counter.tsx": $Counter,
    "./islands/Description.tsx": $Description,
    "./islands/Description2.tsx": $Description2,
    "./islands/Menu.tsx": $Menu,
    "./islands/Modal.tsx": $Modal,
    "./islands/ModalContainer.tsx": $ModalContainer,
    "./islands/NavMenu.tsx": $NavMenu,
    "./islands/NavMenu2.tsx": $NavMenu2,
    "./islands/OfferList.tsx": $OfferList,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
