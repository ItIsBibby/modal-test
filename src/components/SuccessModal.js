import { TiTick } from "react-icons/ti";
import { LoremIpsum } from "react-lorem-ipsum";

export default function SuccessModal() {
    return (
        <div className="modal">
                <div className="header">
                    <div className="tickWrapper">
                        <TiTick color={"white"} />
                    </div>
                    <p>Congratulations your jet2 holiday booking has been confirmed</p>
                </div>
                <LoremIpsum random={false} avgSentencesPerParagraph={4}/>
                <div className="breaker"/>
            <div className="buttonContainer">
                <button>Cancel</button>
                <button className="primary">Continue</button>
            </div>
        </div>
    );
};