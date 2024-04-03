const handleForumClick = (forumName, history) => {
    const forumPaths = {
        "v/Gorilla Tag": "/Forum",
        "v/Quest 3": "/Home",
        "v/Quest 2": "/Profile",
        "v/GTA VI": "/Forum",
        "v/GTA V": "/Forum",
        "v/Spiderman": "/Forum",
        "v/valve": "/Forum",
        "v/MineCraft": "/Forum",
        "v/Fortnite": "/Forum",
        "v/Apex Legends": "/Forum",
        "v/BeatSaber": "/Forum",
        // Add the rest of the forums and their paths here
    };

    history.push(forumPaths[forumName]);
};

export default handleForumClick;
