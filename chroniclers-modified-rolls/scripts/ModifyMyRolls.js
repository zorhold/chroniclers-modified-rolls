// Creates option in Chat Context Menu
Hooks.on("getChatLogEntryContext", (html, options) => {
    let canApply = li => li.find(".dice-roll").length && game.user.role == 4;
    options.push(
      {
        name: "Modify this roll",
        icon: '<i class="fas fa-pencil-alt"></i>',
        condition: canApply,
        callback: li => modifyRoll(li)
    })
})

async function modifyRoll(li) {
    let this_mess = ui.chat.collection.get($(li).attr("data-message-id"));
    let newRoll = duplicate(this_mess.roll);

    let modification = await new Promise(resolve => {
        new Dialog({
            title: "Modify Roll",
            content: 
                `<div>
                    <label> Modifier: </label>
                    <input type = "number" class = "postModifier" value = "0">
                    </input>
                </div>`,
            buttons: {
                ok: {
                    label: "OK",
                    callback: () => {
                        resolve({
                            Modifier:$('.postModifier')[0].value,
                        })
                    }               
                },
                no: {
                    label: "Cancel",
                },
            },
            default: "ok",
        }).render(true);
    })

    let input_mod = parseInt(modification.Modifier);
    newRoll.total = newRoll.total + input_mod;
    if (this_mess.data.flavor === undefined) {
        if (input_mod < 0) {
            newRoll.formula = (newRoll.formula + input_mod);
            newRoll.flavor = ("<i>Modifier: " + input_mod + "<i/>");
        }
        if (input_mod >= 0 ) {
            newRoll.formula = (newRoll.formula + " + " + input_mod);
            newRoll.flavor = ("<i>Modifier: +" + input_mod + "<i/>");
        }
    }
    if (this_mess.data.flavor != undefined) { 
        if (input_mod < 0) {
            newRoll.formula = (newRoll.formula + input_mod);
            newRoll.flavor = (this_mess.data.flavor + "<br/><i>Modifier: " + input_mod + "<i/>");
        }
        if (input_mod >= 0 ) {
            newRoll.formula = (newRoll.formula + " + " + input_mod);
            newRoll.flavor = (this_mess.data.flavor + "<br/><i>Modifier: +" + input_mod + "<i/>");
        }
    }

    await this_mess.update({flavor: newRoll.flavor, content: newRoll.total, roll: JSON.stringify(newRoll)});
    li = [];
    this_mess = [];
    newRoll = [];
    this_mess = [];
    modification = [];
    input_mod = [];
    return li;
}