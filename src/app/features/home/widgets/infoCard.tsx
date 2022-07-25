import { InfoCardInterface } from "../interfaces";


export const InfoCard = (props: { card: InfoCardInterface }) => {
    return (
        <div className="flex flex-col space-y-4 lg:space-y-8 lg:px-8 items-center pb-16 lg:pb-0">
            {props.card.icon}
            <p className="text-center lg:text-xl font-semibold">{props.card.title}</p>
            <p className="text-center tracking-wide">{props.card.text}</p>
        </div>
    );
};