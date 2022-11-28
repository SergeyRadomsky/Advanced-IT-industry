function outerFunction () {
  const outer = `I see the outer variable!`;

  function innerFunction() {
    console.log(outer);
  }

  return innerFunction;
}

outerFunction()();

                                     // style="width: 100%; height: 450px; background-size:cover; border-radius: 30px;
                                     // overflow: hidden; position: absolute;/* top: -10px; left: -10px;*/ object-fit: cover">
 /*position:relative; max-width: 500px;
                        height: 450px;
                         flex: 0 1 50%;
    width: 100%;
    /!*padding-bottom: 72%;*!/
    overflow: hidden;
    -webkit-box-shadow: 0 0 10px rgba(111,111,111,.25);
    box-shadow: 0 0 10px rgba(111,111,111,.25);
    border-radius: 30px;*/