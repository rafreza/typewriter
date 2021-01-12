const typewriter = (text) => {
  let interval = 50;
  for (const char of text) {
    setTimeout(() => {
      process.stdout.write(char);
    }, interval)
    interval += 50;
  };
  setTimeout(() => {
    process.stdout.write('\n');
  }, interval)
};
 
typewriter('hello there from lighthouse labs');
