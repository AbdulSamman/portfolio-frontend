import fs from "fs";

const name = process.argv[2];

if (name === undefined) {
  console.log("SCRIPT: cp");
  console.log("NAME: create page");
  console.log("--------------");
  console.log("EXAMPLE: npm run cp Info");
  console.log("RESULT: creates page /src/pages/PageInfo.tsx");
  process.exit();
} else {
  const content = `export const Page${name} =()=>{
        return (
            <>
            <p>welcome to the ${name} page</p>
            </>
        );
    }
    `;
  (async () => {
    fs.writeFile(`./src/pages/Page${name}.tsx`, content.trim(), () => {});
  })();
}
