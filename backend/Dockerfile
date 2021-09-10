FROM maven:3.8.2-amazoncorretto-8 as builder

WORKDIR /app

COPY . .

RUN mvn package

FROM adoptopenjdk/openjdk8

COPY --from=builder /app/target/workbench-1.0.0.jar /app/workbench-1.0.0.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/workbench-1.0.0.jar"]
