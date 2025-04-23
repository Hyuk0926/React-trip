import ImageSection from "./image-section";
import RecommendContainer from "./recommend-container";
import NoticeSection from "./notice";

import type { Props as RecommendSectionProps } from "./recommend-container";
import type { Props as NoticeProps } from "./notice";

interface Props {
    reservations: RecommendSectionProps["reservations"];
    notices: NoticeProps["notices"];
}

const main = ({ reservations, notices }: Props) => {
    return (
        <div>
            <ImageSection />
            <RecommendContainer reservations={reservations} />
            <NoticeSection notices={notices} />
        </div>
    );
}

export default main;