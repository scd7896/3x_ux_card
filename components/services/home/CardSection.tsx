import useWindowSize from "../../../hooks/useWindowSize";
import Cardview from "../../Card/Cardview";
import FadeInUpContainer from "../../layout/FadeInUpContainer";
import Link from "../../Link/Link";
import Title from "../../text/Title";
import styles from "./CardSection.module.css";

const cardContents = [
	{
		title: "개인 작업 중이신가요?",
		contents: "논리적인 포트폴리오를 만들고 싶은데 무엇을 해야할지 모르겠나요?",
		url: "",
		imageUrl: "/img/main_personal.png",
	},
	{
		title: "리뉴얼/고도화 하세요?",
		contents: "기존 서비스를 어떻게 분석하고 개선점을 찾을지 막막한가요?",
		url: "",
		imageUrl: "/img/main_renewal.png",
	},
	{
		title: "신규 런칭을 기획 중이세요?",
		contents: "새로운 기능이나 서비스를 만드려고 하는데 시작부터 막막한가요?",
		url: "",
		imageUrl: "/img/main_launching.png",
	},
];

export default function CardSection() {
	const { isMobile } = useWindowSize();

	return (
		<section className={styles.wrapper}>
			<FadeInUpContainer>
				<div className={styles.titleWrapper}>
					{!isMobile ? (
						<Title level={2}>프로젝트 상황에 맞는 방법론을 추천해드릴게요</Title>
					) : (
						<>
							<Title level={2}>프로젝트 상황에 맞는</Title>
							<Title level={2}>방법론을 추천해드릴게요</Title>
						</>
					)}
				</div>
			</FadeInUpContainer>
			<FadeInUpContainer>
				<div className={styles.cardWrapper}>
					{cardContents.map(({ title, contents, url, imageUrl }, index) => (
						<section key={index} className={styles.card}>
							<Cardview
								footer={
									<Link className={styles.link} href={url}>
										방법론 보기
									</Link>
								}
								title={title}
								contents={contents}
								imageUrl={imageUrl}
							/>
						</section>
					))}
				</div>
			</FadeInUpContainer>
		</section>
	);
}
