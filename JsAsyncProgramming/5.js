
function stageDesign(cb) {
  setTimeout(() => {
    console.log("design done");
    cb(null, "design");
  }, 1000);
}

function stageBuild(cb) {
  setTimeout(() => {
    console.log("build done");
    cb(null, "build");
  }, 1000);
}

function stageTest(cb) {
  setTimeout(() => {
    console.log("test done");
    cb(null, "test");
  }, 1000);
}

function stageDeploy(cb) {
  setTimeout(() => {
    console.log("deploy done");
    cb(null, "deploy");
  }, 1000);
}

function stageCelebrate(cb) {
  setTimeout(() => {
    console.log("celebrate 🎉");
    cb(null, "celebrate");
  }, 1000);
}

// Callback Hell demonstration (nested callbacks)
function runPipelineWithCallbacks() {
  console.log("Running pipeline with nested callbacks (callback hell):");
  stageDesign((err) => {
    if (err) return console.error("error at design", err);
    stageBuild((err) => {
      if (err) return console.error("error at build", err);
      stageTest((err) => {
        if (err) return console.error("error at test", err);
        stageDeploy((err) => {
          if (err) return console.error("error at deploy", err);
          stageCelebrate((err) => {
            if (err) return console.error("error at celebrate", err);
            console.log("Pipeline complete (callbacks).");
          });
        });
      });
    });
  });
}

// Clean version using promises + async/await
function delayMs(ms = 1000) {
  return new Promise((res) => setTimeout(res, ms));
}

async function asyncStage(name) {
  // each stage delays 1s then logs
  await delayMs(1000);
  console.log(`${name} done`);
  // optionally simulate random failure? omitted to keep simple
  return name;
}

async function runPipelineAsync() {
  console.log("Running pipeline with async/await:");
  try {
    await asyncStage("design");
    await asyncStage("build");
    await asyncStage("test");
    await asyncStage("deploy");
    await asyncStage("celebrate 🎉");
    console.log("Pipeline complete (async/await).");
  } catch (err) {
    console.error("Pipeline failed:", err);
  }
}

// Run both demonstrations
runPipelineWithCallbacks();
setTimeout(() => runPipelineAsync(), 7000); // delay start so logs don't interleave too badly
