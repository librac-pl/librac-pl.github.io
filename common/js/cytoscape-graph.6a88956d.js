$(function() {
    var a = cytoscape({
        container: document.getElementById("cy"),
        zoomingEnabled: !1,
        userPanningEnabled: !1,
        boxSelectionEnabled: !1,
        autounselectify: !0,
        style: cytoscape.stylesheet().selector("node").css({
            content: "data(id)",
            overflow: "hidden"
        }).selector("edge").css({
            "target-arrow-shape": "triangle",
            width: 4,
            "line-color": "#ddd",
            "target-arrow-color": "#ddd",
            "curve-style": "bezier"
        }).selector("#Firma1").css({
            "target-arrow-shape": "triangle",
            width: 60,
            height: 60,
            "background-image": "url(https://c1.twst.com/wp-content/uploads/2015/09/xGE.png.pagespeed.ic.nPbVybCny-.jpg)"
        }).selector("#Firma2").css({
            "target-arrow-shape": "triangle",
            width: 90,
            height: 90,
            "background-image": "url(../common/images/company9.8375552d.jpg)"
        }).selector("#Firma3").css({
            "target-arrow-shape": "triangle",
            width: 60,
            height: 60,
            "background-image": "url(https://0.gravatar.com/avatar/3051f077f53715397f6f1850a71da918?s=60&d=identicon&r=G)"
        }).selector("#Firma4").css({
            "target-arrow-shape": "triangle",
            width: 45,
            height: 45,
            "background-image": "url(../common/images/company1.e70ad7b0.png)"
        }).selector("#Firma5").css({
            "target-arrow-shape": "triangle",
            width: 45,
            height: 45,
            "background-image": "url(../common/images/company2.fea7ea3c.jpg)"
        }).selector("#Firma6").css({
            "target-arrow-shape": "triangle",
            width: 30,
            height: 30,
            "background-image": "url(../common/images/company3.a2009b20.png)"
        }).selector("#Firma7").css({
            "target-arrow-shape": "triangle",
            width: 30,
            height: 30,
            "background-image": "url(../common/images/company4.603b74d0.png)"
        }).selector("#Firma8").css({
            "target-arrow-shape": "triangle",
            width: 30,
            height: 30,
            "background-image": "url(../common/images/company5.0e955963.jpg)"
        }).selector("#Firma9").css({
            "target-arrow-shape": "triangle",
            width: 30,
            height: 30,
            "background-image": "url(../common/images/company6.67ca7ec8.jpg)"
        }).selector("#Firma10").css({
            "target-arrow-shape": "triangle",
            width: 30,
            height: 30,
            "background-image": "url(../common/images/company7.5707ad36.png)"
        }).selector(".highlighted").css({
            "background-color": "#61bffc",
            "line-color": "#61bffc",
            "target-arrow-color": "#61bffc",
            "transition-property": "background-color, line-color, target-arrow-color",
            "transition-duration": "0.5s"
        }),
        elements: {
            nodes: [{
                data: {
                    id: "Firma1"
                }
            }, {
                data: {
                    id: "Firma2"
                }
            }, {
                data: {
                    id: "Firma3"
                }
            }, {
                data: {
                    id: "Firma4"
                }
            }, {
                data: {
                    id: "Firma5"
                }
            }, {
                data: {
                    id: "Firma6"
                }
            }, {
                data: {
                    id: "Firma7"
                }
            }, {
                data: {
                    id: "Firma8"
                }
            }, {
                data: {
                    id: "Firma9"
                }
            }, {
                data: {
                    id: "Firma10"
                }
            }],
            edges: [{
                data: {
                    id: 'Firma1"Firma5',
                    weight: 1,
                    source: "Firma1",
                    target: "Firma5"
                }
            }, {
                data: {
                    id: "Firma1Firma2",
                    weight: 3,
                    source: "Firma1",
                    target: "Firma2"
                }
            }, {
                data: {
                    id: "Firma2Firma5",
                    weight: 4,
                    source: "Firma2",
                    target: "Firma5"
                }
            }, {
                data: {
                    id: "Firma2Firma3",
                    weight: 5,
                    source: "Firma2",
                    target: "Firma3"
                }
            }, {
                data: {
                    id: "Firma3Firma5",
                    weight: 6,
                    source: "Firma3",
                    target: "Firma5"
                }
            }, {
                data: {
                    id: "Firma3Firma4",
                    weight: 2,
                    source: "Firma3",
                    target: "Firma4"
                }
            }, {
                data: {
                    id: "Firma4Firma5",
                    weight: 7,
                    source: "Firma4",
                    target: "Firma5"
                }
            }, {
                data: {
                    id: "Firma6Firma10",
                    weight: 7,
                    source: "Firma6",
                    target: "Firma10"
                }
            }, {
                data: {
                    id: "Firma9Firma8",
                    weight: 7,
                    source: "Firma9",
                    target: "Firma8"
                }
            }, {
                data: {
                    id: "Firma5Firma6",
                    weight: 7,
                    source: "Firma5",
                    target: "Firma6"
                }
            }, {
                data: {
                    id: "Firma6Firma1",
                    weight: 7,
                    source: "Firma6",
                    target: "Firma1"
                }
            }, {
                data: {
                    id: "Firma10Firma3",
                    weight: 7,
                    source: "Firma10",
                    target: "Firma3"
                }
            }, {
                data: {
                    id: "Firma7Firma5",
                    weight: 7,
                    source: "Firma7",
                    target: "Firma5"
                }
            }, {
                data: {
                    id: "Firma9Firma7",
                    weight: 7,
                    source: "Firma9",
                    target: "Firma7"
                }
            }]
        },
        layout: {
            name: "breadthfirst",
            directed: !0,
            roots: "#Firma1",
            padding: 10
        }
    });
    $(window).width() < 650 ? (a.$("#Firma1").position({
        x: 130,
        y: 210
    }), a.$("#Firma2").position({
        x: 230,
        y: 730
    }), a.$("#Firma3").position({
        x: 30,
        y: 650
    }), a.$("#Firma4").position({
        x: 230,
        y: 170
    }), a.$("#Firma5").position({
        x: 70,
        y: 390
    }), a.$("#Firma6").position({
        x: 220,
        y: 410
    }), a.$("#Firma7").position({
        x: 100,
        y: 530
    }), a.$("#Firma8").position({
        x: 230,
        y: 650
    }), a.$("#Firma9").position({
        x: 130,
        y: 770
    }), a.$("#Firma10").position({
        x: 230,
        y: 890
    })) : $(window).width() > 1600 && (a.$("#Firma1").position({
        x: 140,
        y: 180
    }), a.$("#Firma2").position({
        x: 630,
        y: 80
    }), a.$("#Firma3").position({
        x: 1350,
        y: 170
    }), a.$("#Firma4").position({
        x: 1150,
        y: 300
    }), a.$("#Firma5").position({
        x: 800,
        y: 300
    }), a.$("#Firma6").position({
        x: 560,
        y: 650
    }), a.$("#Firma7").position({
        x: 950,
        y: 380
    }), a.$("#Firma8").position({
        x: 1e3,
        y: 500
    }), a.$("#Firma9").position({
        x: 1200,
        y: 420
    }), a.$("#Firma10").position({
        x: 1550,
        y: 530
    })) 
    var i = a.elements().bfs("#x", function() {}, !0),
        r = 0,
        t = function() {
            r < i.path.length && (i.path[r].addClass("highlighted"), r++, setTimeout(t, 1e3))
        };
    t()
});