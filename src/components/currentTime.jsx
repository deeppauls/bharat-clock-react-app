function CurrentTime() {
  let time = new Date();
  return (
    <div className="fw-lighter">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </div>
  );
}

export default CurrentTime;
