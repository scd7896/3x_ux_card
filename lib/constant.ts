import { EProcess, ESituation } from "../types/card.d";

export const CardSubTitleDescription: Record<string, string> = {
	[ESituation.PRIVATE_WORK]: "혼자서도 진행 가능한 간단한 방법론 중심으로 구성했습니다.",
	[ESituation.NEW_LUNCH]:
		"신규구축 / 전체 리뉴얼 시 실무 프로젝트 사이클에 따라 적용 가능한 방법론 중심으로 구성했습니다.",
	[ESituation.RENEWAL]: "서비스 부분 개선 시 실무 프로젝트 사이클에 따라 적용 가능한 방법론 중심으로 구성했습니다.",
	[EProcess.EMPATHY]:
		"프로젝트를 시작하며 UX로 해결해야하는 문제의 초점을 확인하고, 리서치를 통해 일의 우선순위와 목표에 대한 합의를 도출합니다.",
	[EProcess.DESIGN]:
		"도출된 데이터를 바탕으로 사용자 여정 지도, 프로토퍼소나, 콘텐츠 분석 등 브레인 스토밍을 통해 주요 과업을 정의하며 서비스 방향성을 설계합니다.",
	[EProcess.PROTOTYPE]:
		"프로토타입 주요 솔루션을 바탕으로 정립한 디자인원칙과 컨셉을 바탕으로 실질적인 서비스를 만들어 냅니다.",
	[EProcess.TEST]: "디자인을 통해 문제가 적합하게 해결되었는지 검증하고 테스트 결과를 반영합니다.",
	[EProcess.PUBLISH]: "서비스를 출시하고 이슈를 대응 합니다.",
	empty: "전체 방법론 입니다.",
};

export const members = ["UXUI 전문가", "팀 구성원", "사용자", "고객사", "누구나"];
