import LocationsGrid from "@/components/locations/locations-grid";
import Link from "next/link";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";

export default function Locations() {
  return (
    <div className="w-full">
      <Header name="Locations"></Header>

      <Content>
        <div className="w-full max-w-6xl mx-auto mt-8">
          <LocationsGrid></LocationsGrid>
        </div>
      </Content>

      <Footer buttons={[{ title: "Homepage", href: "/" }]} />
    </div>
  );
}
