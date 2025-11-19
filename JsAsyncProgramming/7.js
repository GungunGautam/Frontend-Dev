
function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.25 ? reject(new Error("Profile failed")) : resolve("Profile Loaded");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.25 ? reject(new Error("Posts failed")) : resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.25 ? reject(new Error("Messages failed")) : resolve("Messages Loaded");
    }, 1000);
  });
}

async function loadAllModules() {
  const startTime = Date.now();

  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);

  const endTime = Date.now();
  const elapsedMs = endTime - startTime;

  results.forEach((res, idx) => {
    if (res.status === "fulfilled") {
      console.log(`Module ${idx + 1} succeeded:`, res.value);
    } else {
      console.warn(`Module ${idx + 1} failed:`, res.reason.message);
    }
  });

  console.log(`Total time taken: ${elapsedMs} ms`);
}

loadAllModules();
