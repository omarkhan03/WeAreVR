const handleForumClick = (forumName, history) => {
    const forumPaths = {
        "v/Gorilla Tag": "/Forum",
        "v/Quest 3": "/Quest3Forum",
        "v/Quest 2": "/Forum",
        "v/GTA VI": "/Forum",
        "v/GTA V": "/Forum",
        "v/Spiderman": "/Forum",
        "v/valve": "/Forum",
        "v/MineCraft": "/Forum",
        "v/Fortnite": "/Forum",
        "v/Apex Legends": "/Forum",
        "v/beatsaber": "/Forum",
        // Add the rest of the forums and their paths here
    };

    history.push(forumPaths[forumName]);
};

export default handleForumClick;
