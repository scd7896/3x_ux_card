import { EProcess, ESituation } from "../types/card.d";

export const CardSubTitleDescription: Record<string, string> = {
	[ESituation.PRIVATE_WORK]: "혼자서도 진행 가능한 간단한 방법론 중심으로 구성했습니다.",
	[ESituation.NEW_LUNCH]:
		"신규 구축 / 전체 리뉴얼 시 실무 프로젝트 사이클에 따라 적용 가능한 방법론 중심으로 구성했습니다.",
	[ESituation.RENEWAL]: "서비스 부분 개선 시 실무 프로젝트 사이클에 따라 적용 가능한 방법론 중심으로 구성했습니다.",
	[EProcess.EMPATHY]:
		"프로젝트를 시작하며 UX로 해결해야하는 문제의 초점을 확인하고, 리서치를 통해 일의 우선순위와 목표에 대한 합의를 도출합니다.",
	[EProcess.DESIGN]: "공감 단계에서 수집한 데이터를 바탕으로 사용자 중심의 솔루션을 도출하는 단계입니다.",
	[EProcess.PROTOTYPE]: "주요 솔루션을 바탕으로 정립한 디자인원칙과 컨셉을 바탕으로 실질적인 서비스를 만들어 냅니다.",
	[EProcess.TEST]: "디자인을 통해 문제가 적합하게 해결되었는지 검증하고 테스트 결과를 반영합니다.",
	[EProcess.PUBLISH]: "서비스를 출시하고 이슈에 대응 합니다.",
	empty: "전체 방법론 입니다.",
};

export const members = ["UXUI 전문가", "팀 구성원", "사용자", "이해관계자", "누구나"];
