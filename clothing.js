// Will need to make use of fs to read/write the files.
const fs = require("fs");

const timerM = setTimeout(Male, 5000);
const timerF = setTimeout(Female, 10000);

// Sort Female Clothes
function Female() {
  fs.readFile("./Data/Gender/Female/femaleClothes.json", function (err, data) {
    if (err) {
      return console.error(err);
    }

    const info = JSON.parse(data);

    // Filter by Components:
    const f = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 0
    );
    const m = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 1
    );
    const h = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 2
    );
    const t = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 3
    );
    const l = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 4
    );
    const b = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 5
    );
    const fe = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 6
    );
    const acc = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 7
    );
    const u = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 8
    );
    const bo = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 9
    );
    const D = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 10
    );
    const T = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 11
    );

    const face = JSON.stringify(f);
    const mask = JSON.stringify(m);
    const hair = JSON.stringify(h);
    const torso = JSON.stringify(t);
    const legs = JSON.stringify(l);
    const bags = JSON.stringify(b);
    const feet = JSON.stringify(fe);
    const accessories = JSON.stringify(acc);
    const undershirts = JSON.stringify(u);
    const bodyArmour = JSON.stringify(bo);
    const Decals = JSON.stringify(D);
    const Tops = JSON.stringify(T);

    fs.writeFileSync("./Data/Gender/Female/Face/face.json", face);
    fs.writeFileSync("./Data/Gender/Female/Masks/mask.json", mask);
    fs.writeFileSync("./Data/Gender/Female/Hair/hair.json", hair);
    fs.writeFileSync("./Data/Gender/Female/Torso/torso.json", torso);
    fs.writeFileSync("./Data/Gender/Female/Legs/legs.json", legs);
    fs.writeFileSync("./Data/Gender/Female/Bags/bags.json", bags);
    fs.writeFileSync("./Data/Gender/Female/Feet/feet.json", feet);
    fs.writeFileSync(
      "./Data/Gender/Female/Accessories/accessories.json",
      accessories
    );
    fs.writeFileSync(
      "./Data/Gender/Female/Undershirts/undershirts.json",
      undershirts
    );
    fs.writeFileSync(
      "./Data/Gender/Female/BodyArmour/bodyArmour.json",
      bodyArmour
    );
    fs.writeFileSync("./Data/Gender/Female/Decals/decals.json", Decals);
    fs.writeFileSync("./Data/Gender/Female/Tops/tops.json", Tops);

    console.log("Female Clothes have been categorised");
  });
}

// Sort Male Clothes
function Male() {
  fs.readFile("./Data/Gender/Male/maleClothes.json", function (err, data) {
    if (err) {
      return console.error(err);
    }

    const info = JSON.parse(data);

    // Filter by Components:
    const f = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 0
    );
    const m = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 1
    );
    const h = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 2
    );
    const t = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 3
    );
    const l = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 4
    );
    const b = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 5
    );
    const fe = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 6
    );
    const acc = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 7
    );
    const u = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 8
    );
    const bo = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 9
    );
    const D = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 10
    );
    const T = info[0].ComponentVariations.filter(
      (elem) => elem.ComponentId === 11
    );

    const face = JSON.stringify(f);
    const mask = JSON.stringify(m);
    const hair = JSON.stringify(h);
    const torso = JSON.stringify(t);
    const legs = JSON.stringify(l);
    const bags = JSON.stringify(b);
    const feet = JSON.stringify(fe);
    const accessories = JSON.stringify(acc);
    const undershirts = JSON.stringify(u);
    const bodyArmour = JSON.stringify(bo);
    const Decals = JSON.stringify(D);
    const Tops = JSON.stringify(T);

    fs.writeFileSync("./Data/Gender/Male/Face/face.json", face);
    fs.writeFileSync("./Data/Gender/Male/Masks/mask.json", mask);
    fs.writeFileSync("./Data/Gender/Male/Hair/hair.json", hair);
    fs.writeFileSync("./Data/Gender/Male/Torso/torso.json", torso);
    fs.writeFileSync("./Data/Gender/Male/Legs/legs.json", legs);
    fs.writeFileSync("./Data/Gender/Male/Bags/bags.json", bags);
    fs.writeFileSync("./Data/Gender/Male/Feet/feet.json", feet);
    fs.writeFileSync(
      "./Data/Gender/Male/Accessories/accessories.json",
      accessories
    );
    fs.writeFileSync(
      "./Data/Gender/Male/Undershirts/undershirts.json",
      undershirts
    );
    fs.writeFileSync(
      "./Data/Gender/Male/BodyArmour/bodyArmour.json",
      bodyArmour
    );
    fs.writeFileSync("./Data/Gender/Male/Decals/decals.json", Decals);
    fs.writeFileSync("./Data/Gender/Male/Tops/tops.json", Tops);

    console.log("Male Clothes have been categorised");
  });
}

function gender() {
  fs.readFile(
    "./RawData/GTA-V Clothes Data/pedComponentVariations.json",
    function (err, data) {
      if (err) {
        return console.error(err);
      }
      const info = JSON.parse(data);
      // Filter by DLC
      const mArr = info.filter((elem) =>
        elem.DlcCollectionName.includes("_m_")
      );
      const fArr = info.filter((elem) =>
        elem.DlcCollectionName.includes("_f_")
      );

      // Get Filtered content and Stringify it
      const mArrString = JSON.stringify(mArr);
      const fArrString = JSON.stringify(fArr);

      /* We will write both Male/Female Clothes into seperate files, This will make it easier to sort 
           into respective categories, and take less strain off the PC.
        */

      // Write the Male file
      fs.writeFileSync("./Data/Gender/Male/maleClothes.json", mArrString);
      // Write the Female File
      fs.writeFileSync("./Data/Gender/Female/femaleClothes.json", fArrString);

      // Output that task is complete
      console.log("Seperated Files into Male and Female respectively");
      ``;
    }
  );
}

gender();
