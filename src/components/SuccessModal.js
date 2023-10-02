import { TiTick } from "react-icons/ti";
import { LoremIpsum } from "react-lorem-ipsum";
import { Queue } from "./Queue";

export default function SuccessModal(props) {
    return (
        <div className="modalWrapper">
            <div className="modal">
                    <div className="header">
                        <div className="tickWrapper">
                            <TiTick color={"white"} />
                        </div>
                        <p>Congratulations your jet2 holiday booking has been confirmed</p>
                        <Queue modals={props.modals}/>
                    </div>
                    <LoremIpsum random={false} avgSentencesPerParagraph={4}/>
                    <div className="breaker"/>
                <div className="buttonContainer">
                    <button className="modalButton" onClick={() => props.setModal(props.id)}>Cancel</button>
                    <button className="modalButton primary" onClick={() => props.setModal(props.id)}>Continue</button>
                </div>
            </div>
        </div>
    );
};