# Single-stage: Maven builds the JAR and the same image runs it.
FROM maven:3.9.9-eclipse-temurin-17

WORKDIR /app
COPY pom.xml ./
COPY src ./src
RUN mvn -B package

CMD ["java", "-jar", "target/hello-java-1.0.0.jar"]
