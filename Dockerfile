FROM nginx

RUN mkdir "/etc/nginx/templates"

COPY default.conf.template /etc/nginx/templates

COPY dist/docker-three-tier-demo-frontend/browser /usr/share/nginx/html