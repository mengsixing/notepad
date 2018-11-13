mv ./dist ./docker
docker image build . -t yhlben/notepad
docker push yhlben/notepad
