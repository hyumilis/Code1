namespace shovelnovel{
    type Parent = Window & {gamestate: boolean};
    declare let parent: Parent;

    console.log(parent);
    console.log(parent.gamestate);
    if (parent.gamestate == true) {
        console.log("discovery");
    }



}