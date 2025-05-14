/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function BlogPage(props: PageProps) {
  return (
    <div>
      <h1>Kontakt</h1>
      <p>Możesz się z nami skontaktować pod adresem: kontakt@firma.pl</p>
    </div>
  );
}
