#!/bin/bash

# GitHub 저장소 주소 (SSH URL): git@github.com:KCRUISE/promptAgent.git
# Deploy Keys 인증 방식 git_push 스크립트
#
# 스크립트 사용 전 확인사항:
# 1. **중요: 현재 스크립트를 Git 저장소의 루트 디렉토리에서 실행해야 합니다.**
#    (`.git` 디렉토리가 있는 곳)
# 2. GitHub 저장소에 Deploy Key (쓰기 권한 포함)가 등록되어 있어야 합니다.
#    (사전 준비 사항 참고)
# 3. Git 원격 저장소 'origin'의 URL이 SSH 기반 URL로 설정되어 있어야 합니다.
#    (git remote set-url origin ... 명령어로 변경)
# 4. 푸시하려는 브랜치 이름을 확인하세요 (기본적으로 'main' 브랜치를 사용).
# 5. SSH 키 파일 경로를 `deploy_key_path` 변수에 정확히 설정하세요.

set -e # 스크립트가 에러 발생 시 즉시 종료

echo "🚀 Deploy Keys 인증 방식 GitHub 푸시 스크립트를 시작합니다..."

# --- [ Deploy Key 설정 ] ---
deploy_key_path=~/.ssh/id_rsa.pub  # **Deploy Key 개인 키 파일 경로를 설정하세요.**

# SSH 에이전트 실행 및 키 추가 (이미 실행 중이면 생략)
if ! pgrep ssh-agent > /dev/null; then
  echo "- SSH 에이전트를 시작합니다."
  eval $(ssh-agent -s)
fi

if ! ssh-add -l | grep -q "$(ssh-keygen -y -f ${deploy_key_path})"; then
  echo "- SSH 에이전트에 Deploy Key를 추가합니다."
  ssh-add ${deploy_key_path}
else
  echo "- SSH 에이전트에 Deploy Key가 이미 추가되어 있습니다."
fi

# --- [ Git 푸시 ] ---

# 1. 변경사항 스테이징 (git add)
echo "- 모든 변경사항을 스테이징합니다."
git add .

# 2. 커밋 메시지 입력 요청 (git commit)
read -p "📝 커밋 메시지를 입력하세요: " commit_message
if [ -z "$commit_message" ]; then
    echo "⚠️ 커밋 메시지가 입력되지 않았습니다. 기본 메시지를 사용합니다."
    commit_message="feat: Deploy Keys 푸시" # 기본 메시지
fi
echo "- 커밋 메시지: '$commit_message'"
git commit -m "$commit_message"

# 3. GitHub 원격 저장소에 푸시 (git push)
remote_name="origin" # 원격 저장소 이름 (일반적으로 'origin')
branch_name="main"   # 푸시할 브랜치 이름 (기본적으로 'main')
echo "- '$remote_name' 원격 저장소의 '$branch_name' 브랜치에 푸시합니다."
git push $remote_name $branch_name

echo "✅ Deploy Keys 인증 방식 GitHub 푸시 완료!"
echo "🎉 수고하셨습니다!"