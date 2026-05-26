(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scripts":{"initAnalytics":TDV.Tour.Script.initAnalytics,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"initQuiz":TDV.Tour.Script.initQuiz,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"openLink":TDV.Tour.Script.openLink,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMainViewer":TDV.Tour.Script.getMainViewer,"clone":TDV.Tour.Script.clone,"historyGoBack":TDV.Tour.Script.historyGoBack,"setValue":TDV.Tour.Script.setValue,"historyGoForward":TDV.Tour.Script.historyGoForward,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showWindow":TDV.Tour.Script.showWindow,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"getKey":TDV.Tour.Script.getKey,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showWindowBase":TDV.Tour.Script.showWindowBase,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"executeJS":TDV.Tour.Script.executeJS,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupImage":TDV.Tour.Script.showPopupImage,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"shareSocial":TDV.Tour.Script.shareSocial,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"existsKey":TDV.Tour.Script.existsKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"init":TDV.Tour.Script.init,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"toggleVR":TDV.Tour.Script.toggleVR,"registerKey":TDV.Tour.Script.registerKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"disableVR":TDV.Tour.Script.disableVR,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playAudioList":TDV.Tour.Script.playAudioList,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getComponentByName":TDV.Tour.Script.getComponentByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"enableVR":TDV.Tour.Script.enableVR,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"mixObject":TDV.Tour.Script.mixObject,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"unloadViewer":TDV.Tour.Script.unloadViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"createTween":TDV.Tour.Script.createTween,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getOverlays":TDV.Tour.Script.getOverlays,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizStart":TDV.Tour.Script.quizStart,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"isPanorama":TDV.Tour.Script.isPanorama,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"translate":TDV.Tour.Script.translate,"setLocale":TDV.Tour.Script.setLocale},"scrollBarColor":"#000000","hash": "a99a339e4b1b7392c5eb2a334ac6db01f5d7c1dfc34944d5c7c81d56b6fc73c6", "definitions": [{"class":"Panorama","hfov":360,"vfov":135,"id":"panorama_689901A9_634D_5B74_41B0_756B8BEAB58A","frames":[{"cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_689901A9_634D_5B74_41B0_756B8BEAB58A_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_689901A9_634D_5B74_41B0_756B8BEAB58A_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_689901A9_634D_5B74_41B0_756B8BEAB58A_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_689901A9_634D_5B74_41B0_756B8BEAB58A_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_689901A9_634D_5B74_41B0_756B8BEAB58A_t.webp"}],"thumbnailUrl":"media/panorama_689901A9_634D_5B74_41B0_756B8BEAB58A_t.webp","overlays":["this.overlay_736A6D82_6355_4B35_41D7_B75BC2099A59","this.overlay_73254AFB_6356_CECB_41BE_B5D0F25E2364"],"data":{"label":"streetview_5DFMJL7PUEMMg93NG9Olgg_high"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_73254AFB_6356_CECB_41BE_B5D0F25E2364"},"distance":3.55,"backwardYaw":-0.05,"yaw":-179.12,"class":"AdjacentPanorama","panorama":"this.panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026","select":"this.overlay_73254AFB_6356_CECB_41BE_B5D0F25E2364.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_736A6D82_6355_4B35_41D7_B75BC2099A59"},"distance":3.44,"backwardYaw":0.29,"yaw":-0.56,"class":"AdjacentPanorama","panorama":"this.panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C","select":"this.overlay_736A6D82_6355_4B35_41D7_B75BC2099A59.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('panorama_689901A9_634D_5B74_41B0_756B8BEAB58A.label'),"hfovMax":130},{"toolTipBackgroundColor":"#F6F6F6","width":"100%","playbackBarHeadWidth":6,"playbackBarHeadShadowVerticalLength":0,"progressBottom":10,"playbackBarProgressBorderRadius":0,"playbackBarProgressBorderSize":0,"toolTipPaddingLeft":6,"progressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","progressHeight":2,"vrThumbstickRotationStep":20,"toolTipPaddingTop":4,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","data":{"name":"Main Viewer"},"progressBarBorderRadius":2,"subtitlesBottom":50,"progressBarBorderSize":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarRight":0,"toolTipShadowColor":"#333138","playbackBarProgressBackgroundColorRatios":[0],"progressBorderRadius":2,"progressLeft":"33%","playbackBarBorderColor":"#FFFFFF","toolTipPaddingRight":6,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"toolTipFontColor":"#606060","subtitlesTextShadowColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowColor":"#000000","firstTransitionDuration":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"subtitlesBackgroundOpacity":0.2,"playbackBarBorderSize":0,"toolTipBorderColor":"#767676","vrPointerColor":"#FFFFFF","subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"toolTipFontFamily":"Arial","vrPointerSelectionColor":"#FF6600","subtitlesFontFamily":"Arial","playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"id":"MainViewer","playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionTime":2000,"playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"class":"ViewerArea","progressRight":"33%","playbackBarHeadShadow":true,"minHeight":50,"subtitlesBackgroundColor":"#000000","minWidth":100,"subtitlesGap":0,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"propagateClick":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"height":"100%","progressOpacity":0.7,"subtitlesFontColor":"#FFFFFF","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"playbackBarHeight":10,"progressBackgroundColor":["#000000"]},{"class":"Panorama","hfov":360,"vfov":135,"id":"panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C","frames":[{"cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C_t.webp"}],"thumbnailUrl":"media/panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C_t.webp","overlays":["this.overlay_6C0AB351_6355_7FD7_41D4_EE4C7F8D9977","this.overlay_73E45F63_6355_C7F4_41D6_AC00F8D5FCB0"],"data":{"label":"streetview_8rsLnB9-o_Rr6dNTEXJ9xQ_high"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_6C0AB351_6355_7FD7_41D4_EE4C7F8D9977"},"distance":3.25,"backwardYaw":-0.56,"yaw":0.29,"class":"AdjacentPanorama","panorama":"this.panorama_689901A9_634D_5B74_41B0_756B8BEAB58A","select":"this.overlay_6C0AB351_6355_7FD7_41D4_EE4C7F8D9977.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_73E45F63_6355_C7F4_41D6_AC00F8D5FCB0"},"distance":3.34,"backwardYaw":-178.84,"yaw":-179.09,"class":"AdjacentPanorama","panorama":"this.panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026","select":"this.overlay_73E45F63_6355_C7F4_41D6_AC00F8D5FCB0.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C.label'),"hfovMax":130},{"enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_689901A9_634D_5B74_41B0_756B8BEAB58A_camera","initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_69B04E50_634D_49D4_41D5_57C8D8B5C6D8"},{"enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026_camera","initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_69B60C95_634B_495C_41D0_BC60F5094388"},{"class":"Panorama","hfov":360,"vfov":135,"id":"panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026","frames":[{"cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026_t.webp"}],"thumbnailUrl":"media/panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026_t.webp","overlays":["this.overlay_7372417E_6356_DBCD_41D1_E3B973DAF255","this.overlay_7313E616_6357_595C_41BF_E6B86F349FBC"],"data":{"label":"streetview_uzVlUkLkFBjFrcl79iBcQg_high"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_7372417E_6356_DBCD_41D1_E3B973DAF255"},"distance":3.54,"backwardYaw":-179.12,"yaw":-0.05,"class":"AdjacentPanorama","panorama":"this.panorama_689901A9_634D_5B74_41B0_756B8BEAB58A","select":"this.overlay_7372417E_6356_DBCD_41D1_E3B973DAF255.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_7313E616_6357_595C_41BF_E6B86F349FBC"},"distance":3.33,"backwardYaw":-179.09,"yaw":-178.84,"class":"AdjacentPanorama","panorama":"this.panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C","select":"this.overlay_7313E616_6357_595C_41BF_E6B86F349FBC.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026.label'),"hfovMax":130},{"id":"mainPlayList","items":[{"camera":"this.panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C_camera","media":"this.panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_689901A9_634D_5B74_41B0_756B8BEAB58A_camera","media":"this.panorama_689901A9_634D_5B74_41B0_756B8BEAB58A","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026_camera","media":"this.panorama_68CC7054_634B_59DC_41D0_78CF8ABB6026","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_684FE1F0_634D_FAD5_41BD_DF9CDCA7013C_camera","initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_69BA5F60_634D_C7F4_41C6_F8A0BECA1D71"},{"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","touchControlMode":"drag_rotation","aaEnabled":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true},{"data":{"hasPanoramaAction":true,"label":"GoToStreetview_8rslnb9-o_rr6dntexj9xq_high"},"maps":[],"items":[{"pitch":-26.3,"distance":50,"yaw":-0.56,"scaleMode":"fit_inside","data":{"label":"GoToStreetview_8rslnb9-o_rr6dntexj9xq_high"},"vfov":7.04,"hfov":5.77,"class":"HotspotPanoramaOverlayImage","image":"this.res_73022216_6355_595A_41D3_2561DF9C2FA3"}],"enabledInVR":true,"class":"HotspotPanoramaOverlay","id":"overlay_736A6D82_6355_4B35_41D7_B75BC2099A59","areas":["this.HotspotPanoramaOverlayArea_6CDDEE07_6355_493B_41D1_C6AFE88DBC66"],"useHandCursor":true},{"data":{"hasPanoramaAction":true,"label":"GoToStreetview_uzvluklkfbjfrcl79ibcqg_high"},"maps":[],"items":[{"pitch":-25.56,"distance":50,"yaw":-179.12,"scaleMode":"fit_inside","data":{"label":"GoToStreetview_uzvluklkfbjfrcl79ibcqg_high"},"vfov":6.81,"hfov":5.29,"class":"HotspotPanoramaOverlayImage","image":"this.res_73022216_6355_595A_41D3_2561DF9C2FA3"}],"enabledInVR":true,"class":"HotspotPanoramaOverlay","id":"overlay_73254AFB_6356_CECB_41BE_B5D0F25E2364","areas":["this.HotspotPanoramaOverlayArea_73224B02_6356_CF35_41D0_329C6F3C3982"],"useHandCursor":true},{"data":{"hasPanoramaAction":true,"label":"GoToStreetview_5dfmjl7puemmg93ng9olgg_high"},"maps":[],"items":[{"pitch":-27.58,"distance":50,"yaw":0.29,"scaleMode":"fit_inside","data":{"label":"GoToStreetview_5dfmjl7puemmg93ng9olgg_high"},"vfov":8.94,"hfov":6.72,"class":"HotspotPanoramaOverlayImage","image":"this.res_73022216_6355_595A_41D3_2561DF9C2FA3"}],"enabledInVR":true,"class":"HotspotPanoramaOverlay","id":"overlay_6C0AB351_6355_7FD7_41D4_EE4C7F8D9977","areas":["this.HotspotPanoramaOverlayArea_6C7933DA_6355_7ED4_41B6_078E985E0653"],"useHandCursor":true},{"data":{"hasPanoramaAction":true,"label":"GoToStreetview_uzvluklkfbjfrcl79ibcqg_high"},"maps":[],"items":[{"pitch":-26.95,"distance":50,"yaw":-179.09,"scaleMode":"fit_inside","data":{"label":"GoToStreetview_uzvluklkfbjfrcl79ibcqg_high"},"vfov":7.52,"hfov":6.48,"class":"HotspotPanoramaOverlayImage","image":"this.res_73022216_6355_595A_41D3_2561DF9C2FA3"}],"enabledInVR":true,"class":"HotspotPanoramaOverlay","id":"overlay_73E45F63_6355_C7F4_41D6_AC00F8D5FCB0","areas":["this.HotspotPanoramaOverlayArea_73E68F6F_6355_C7CC_41D1_9FDF67BC19F4"],"useHandCursor":true},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_69B04E50_634D_49D4_41D5_57C8D8B5C6D8"},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_69B60C95_634B_495C_41D0_BC60F5094388"},{"data":{"hasPanoramaAction":true,"label":"GoToStreetview_5dfmjl7puemmg93ng9olgg_high"},"maps":[],"items":[{"pitch":-25.63,"distance":50,"yaw":-0.05,"scaleMode":"fit_inside","data":{"label":"GoToStreetview_5dfmjl7puemmg93ng9olgg_high"},"vfov":7.28,"hfov":6,"class":"HotspotPanoramaOverlayImage","image":"this.res_73022216_6355_595A_41D3_2561DF9C2FA3"}],"enabledInVR":true,"class":"HotspotPanoramaOverlay","id":"overlay_7372417E_6356_DBCD_41D1_E3B973DAF255","areas":["this.HotspotPanoramaOverlayArea_7371A185_6356_DB3F_41D2_69CE88D63D9E"],"useHandCursor":true},{"data":{"hasPanoramaAction":true,"label":"GoToStreetview_8rslnb9-o_rr6dntexj9xq_high"},"maps":[],"items":[{"pitch":-27.07,"distance":50,"yaw":-178.84,"scaleMode":"fit_inside","data":{"label":"GoToStreetview_8rslnb9-o_rr6dntexj9xq_high"},"vfov":7.74,"hfov":5.77,"class":"HotspotPanoramaOverlayImage","image":"this.res_73022216_6355_595A_41D3_2561DF9C2FA3"}],"enabledInVR":true,"class":"HotspotPanoramaOverlay","id":"overlay_7313E616_6357_595C_41BF_E6B86F349FBC","areas":["this.HotspotPanoramaOverlayArea_7310F61D_6357_594C_41D5_A6F006D2A354"],"useHandCursor":true},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_69BA5F60_634D_C7F4_41C6_F8A0BECA1D71"},{"id":"res_73022216_6355_595A_41D3_2561DF9C2FA3","levels":[{"height":144,"url":"media/res_73022216_6355_595A_41D3_2561DF9C2FA3_0.webp","class":"ImageResourceLevel","width":124}],"class":"ImageResource"},{"displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CDDEE07_6355_493B_41D1_C6AFE88DBC66"},{"displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_73224B02_6356_CF35_41D0_329C6F3C3982"},{"displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C7933DA_6355_7ED4_41B6_078E985E0653"},{"displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_73E68F6F_6355_C7CC_41D1_9FDF67BC19F4"},{"displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_7371A185_6356_DB3F_41D2_69CE88D63D9E"},{"displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_7310F61D_6357_594C_41D5_A6F006D2A354"}],"start":"this.init()","id":"rootPlayer","data":{"displayTooltipInTouchScreens":true,"history":{},"textToSpeechConfig":{"pitch":1,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"volume":1},"locales":{"de":"locale/de.txt"},"defaultLocale":"de","name":"Player457"},"scrollBarMargin":2,"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"class":"Player","width":"100%","layout":"absolute","minHeight":0,"minWidth":0,"gap":10,"propagateClick":false,"height":"100%","watermark":false,"defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer"],"downloadEnabled":true};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.9, Tue May 26 2026