mv ./dist ./docker
docker image build ./docker -t yhlben/notepad
docker push yhlben/notepad
