FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY Strona_Glowna.html /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "deamon off;"]