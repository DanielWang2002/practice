import Score from "../component/Score"
import {getAnswerWithQId} from "../component/Question";

const ScorePage = () => {

    return (
        <Score answerList={getAnswerWithQId()}/>
    )

}

export default ScorePage