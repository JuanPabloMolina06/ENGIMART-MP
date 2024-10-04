import { Link } from "react-router-dom";
import CardsVantagensF from "./CardsVantagensF";
import Card1F from "./Cards/Card1-F";
import Card2F from "./Cards/Card2-F";
import Card3F from "./Cards/Card3-F";
import Card4F from "./Cards/Card4-F";

export default function VantagensF() {
    return(
        <>
            <div className="bg-cinza w-screen h-[540px] mt-20 mb-10">
                <div className="flex items-center ml-24">
                    <h1 className="mt-14 text-white font-bold text-3xl">
                        Vantagens que so a
                    </h1>
                    <img src={"/img-logo.png"} className="mt-[63px] ml-3" />
                    <h1 className="mt-14 ml-3 text-white font-bold text-3xl">tem</h1>
                </div>

                <CardsVantagensF>
                    <Card1F/>
                    <Card2F/>
                    <Card3F/>
                    <Card4F/>
                </CardsVantagensF>

            <div className="flex">
                <button>
                    <Link
                        className="hover:underline text-white flex ml-24 mt-10 mb-20"
                        to={"/"}
                        >
                        <h1 className="text-white font-bold text-4xl ">
                        Quero ser parceiro
                        </h1>
                        <p className="font-fira-code font-medium mt-1 ml-2 text-4xl">{"->"}</p>
                    </Link>
                </button>
            </div>
        </div>  
    </>
    );
}