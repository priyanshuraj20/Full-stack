

export default {asyncHandler}

//👉 asyncHandler ="tumhare async route ko try-catch ke andar wrap kar deta hai automatically"
//error handle


// Higher-order function that wraps async route handlers
// It takes an async function (fun) and returns a new function
// This returned function is what Express actually executes

//asyncHandler = "mera async function le aur usko safe environment (try-catch) mein chala de"
const asyncHandler = (fun) => {
  return async (req, res, next) => {
    try {
      // Execute the original async function
      await fun(req, res, next);
    } catch (err) {
      // If error occurs, send standardized error response
      res.status(err.code || 500).json({
        success: false,
        message: err.message,
      });
    }
  };
};

//using promises:
const handler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};