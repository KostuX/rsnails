import { Divider } from "@nextui-org/react";

export default function Person() {
    return (<div className="min-h-screen">
        <Divider className="mt-24"/>
        <div className="flex justify-center w-screen ">
        
        <div className="text-center  font-bold text-2xl max-w-2xl my-24 mx-12">Pasitikėkite savo srities eksperte, kuri rūpinasi jūsų nagais ir stiliumi. Profesionalumas, kruopštumas ir kokybė garantuoti.</div>
        </div>
        <Divider className="mb-24"/>
        <div className="grid  grid-cols-2 ">
            <div className="text-center  mx-4 grid justify-center items-center">
                <img
                    src="/profile.jpg"
                    alt="Profile Image"
                    height={200}
                    width={200}
                />
            </div>
            <div className="text-center  items-center">
                <div className="w-full font-bold text-2xl mb-4">Rs Nails</div>
            <div className="text-center font-bold mx-12">Esu profesionali manikiūrininkė, teikianti aukščiausios kokybės paslaugas. Kiekvienam klientui suteikiu individualų dėmesį, atsižvelgdama į jų pageidavimus ir stilių. Naudodama tik geriausias priemones, užtikrinu ilgalaikį ir nepriekaištingą rezultatą. Mano tikslas – suteikti jums elegancijos ir pasitikėjimo savimi.</div>
            </div>
        </div>
    </div>)
}