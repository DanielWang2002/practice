import Score from "../component/Score"
import {getAnswerWithQId} from "../component/Question";
import {getAnswerWithQIdTest} from "../component/TestQuestion";

const ScorePage = () => {

    const answerWithQid = getAnswerWithQId();
    const answerWithQidTest = getAnswerWithQIdTest();

    if (Object.keys(answerWithQid).length === 0) {
        return (
            <Score answerList={answerWithQidTest}/>
        )
    } else {
        return (
            <Score answerList={answerWithQid}/>
        )
    }

}

export default ScorePage