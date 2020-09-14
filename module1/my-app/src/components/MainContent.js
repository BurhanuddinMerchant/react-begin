import React from "react";
function MainContent() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: "2rem",
  };
  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#111111";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#ff4578";
  } else {
    timeOfDay = "night";
    styles.color = "#d4f5b6";
  }
  return (
    <main>
      <h2>About the course</h2>
      <p>
        <h3 style={styles}>{timeOfDay}</h3>
        This is going to be a full fledge beginners hands on tutorial on react
        and although it is a beginner friendly course ,even the intermediate to
        advanced skill set people can take it as a refresher as it is going to
        go from the very basics to one of the most advanced levels
      </p>
      <hr />
    </main>
  );
}
export default MainContent;
