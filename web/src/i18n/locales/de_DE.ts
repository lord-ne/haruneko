/* eslint-disable indent */
import type { VariantResource } from '../ILocale';
import base from "./en_US";
const translations: VariantResource = { // NOTE: Use defaults for missing translations
  //       => This is just a placeholder to ensure to be included in autogenerated translations (e.g., with crowdin)
  ...base,
  // [SECTION]: FrontendController
  FrontendController_Reload_ConfirmNotice: "Die Benutzeroberfläche wurde geändert. Jetzt neu starten, um zur neuen Benutzeriberfläche zu wechseln?",
  // [SECTION]: Frontend (Common/Shared)
  Frontend_Product_Title: 'HakuNeko',
  Frontend_Product_Description: "Manga, Anime und Novellen Downloader",
  Frontend_Setting: "Einstellung",
  Frontend_Settings: "Einstellungen",
  Frontend_Help: "Hilfe",
  Frontend_About: "Über",
  Frontend_Plugin: "Erweiterung",
  Frontend_Plugins: "Erweiterungen",
  Frontend_Plugin_List: "Liste der Erweiterungen",
  Frontend_Plugin_Select: "Erweiterung Auswählen",
  Frontend_Plugin_Selection: "Auswahl der Erweiterungen",
  Frontend_Media: "Medien",
  Frontend_Medias: "Medien",
  Frontend_Media_List: "Medienliste",
  Frontend_Media_Select: "Wählen Sie ein Medium",
  Frontend_Media_Selection: "Medienauswahl",
  Frontend_Media_PasteLink_NotFoundError: "Der übergebene Link wird nicht unterstützt (es wurde keine passende Webseite gefunden): {0}",
  Frontend_Item: 'Item',
  Frontend_Items: 'items',
  Frontend_Item_List: 'Item list',
  Frontend_Item_Select: 'Select an item',
  Frontend_Item_Selection: 'Item selection',
  // [SECTION]: Frontend Classic
  Frontend_Classic_Label: "Klassisch",
  Frontend_Classic_Description: "Die Standard Benutzeroberfläche basiert größtenteils auf der alten Version",
  Frontend_Classic_Settings_FuzzySearch: "Unscharfe Suche",
  Frontend_Classic_Settings_FuzzySearchInfo: "Unscharfe Suche bei Filtern aktivieren (ungefähre Übereinstimmung)",
  Frontend_Classic_Settings_Theme: "Oberfläche",
  Frontend_Classic_Settings_ThemeInfo: "Wählen Sie das Farbschema für die Benutzeroberfläche",
  Frontend_Classic_Settings_Theme_HakuNeko: 'HakuNeko',
  Frontend_Classic_Settings_Theme_CarbonWhite: "Kohlenstoff Weiß",
  Frontend_Classic_Settings_Theme_CarbonG10: "Kohlenstoff g10 (hell)",
  Frontend_Classic_Settings_Theme_CarbonG90: "Kohlenstoff G90 (dunkel)",
  Frontend_Classic_Settings_Theme_CarbonG100: "Kohlenstoff g100 (dunkel)",
  Frontend_Classic_Settings_Theme_SheepyNeko: 'SheepyNeko',
  Frontend_Classic_Settings_ContentPanel: "Inhaltsbereich",
  Frontend_Classic_Settings_ContentPanelInfo: "Das Inhaltsfenster ein-/ausblenden",
  Frontend_Classic_Settings_SidenavTrail: "Seitennavigation aktivieren",
  Frontend_Classic_Settings_SidenavTrailInfo: 'Left sidenav will only appear on top left icon click',
  Frontend_Classic_Settings_SidenavIconsOnTop: "Menu-Layout aktivieren",
  Frontend_Classic_Settings_SidenavIconsOnTopInfo: "Die Schaltfflächen erscheinen in der Menuleiste anstatt in der Seitennavigation.",
  Frontend_Classic_Settings_ViewerMode: "Anzeigemodus",
  Frontend_Classic_Settings_ViewerModeInfo: "Ändert, wie Seiten/Bilder im Lesebereich angezeigt werden sollen",
  Frontend_Classic_Settings_ViewerMode_Paginated: "Seitenansicht (Manga)",
  Frontend_Classic_Settings_ViewerMode_Longstrip: "Fliessende Ansicht (Webtoon)",
  Frontend_Classic_Settings_ViewerReverseDirection: "Umkehrung der Leserichtung",
  Frontend_Classic_Settings_ViewerReverseDirectionInfo: "Seiten/Bilder in umgekehrter Reihenfolge anzeigen (wie im traditionellen Manga)",
  Frontend_Classic_Settings_ViewerDoublePage: "Zeige Doppelseiten",
  Frontend_Classic_Settings_ViewerDoublePageInfo: "Zeige zwei Seiten/Bilder gleichzeitig (wie im traditionellen Manga)",
  Frontend_Classic_Sidenav_Home: "Hauptseite",
  Frontend_Classic_Sidenav_Settings_General: "Allgemein",
  Frontend_Classic_Sidenav_Settings_Interface: "Benutzeroberfläche",
  Frontend_Classic_Sidenav_Settings_Trackers: "Tracking Platform",
  Frontend_Classic_Sidenav_Settings_Network: "Netzwerk",
  // [SECTION]: Frontend FluentCore
  Frontend_FluentCore_Label: 'Fluent Core',
  Frontend_FluentCore_Description: "Eine einfache Benutzeroberfläche mit reduzierter Ausstattung, vor allem für Entwickler, um wichtige Funktionalität schnell zu überprüfen",
  //
  Frontend_FluentCore_Window_ButtonMinimize_Description: "Die Anwendung minimieren",
  Frontend_FluentCore_Window_ButtonMaximize_Description: "Die Anwendung maximieren",
  Frontend_FluentCore_Window_ButtonRestore_Description: "Die Anwendung wiederherstellen",
  Frontend_FluentCore_Window_ButtonClose_Description: "Die Anwendung schließen",
  //
  Frontend_FluentCore_Menu_Description: "Das Anwendungsmenü anzeigen",
  Frontend_FluentCore_Menu_OpenSettings_Label: "Einstellungen…",
  Frontend_FluentCore_Menu_OpenSettings_Description: "Einstellungen der Anwendung bearbeiten",
  Frontend_FluentCore_Menu_ImportBookmarks_Label: "Lesezeichen importieren…",
  Frontend_FluentCore_Menu_ImportBookmarks_Description: "Importieren aller Lesezeichen aus einer Datei (vorhandene Lesezeichen bleiben bestehen)",
  Frontend_FluentCore_Menu_ExportBookmarks_Label: "Lesezeichen exportieren…",
  Frontend_FluentCore_Menu_ExportBookmarks_Description: "Exportieren aller Lesezeichen in eine Datei (z.B. als Sicherheitskopie)",
  //
  Frontend_FluentCore_Settings_ThemeLuminance_Label: "Helligkeit der Benutzeroberfläche",
  Frontend_FluentCore_Settings_ThemeLuminance_Description: "Ändert die Helligkeit des Motivs für die Benutzeroberfläche",
  Frontend_FluentCore_Settings_ShowBookmarksPanel_Label: "Lesezeichen Ein-/Ausblenden",
  Frontend_FluentCore_Settings_ShowBookmarksPanel_Description: "Schaltet die Sichtbarkeit der Liste mit den Lesezeichen ein/aus",
  Frontend_FluentCore_Settings_ShowDownloadsPanel_Label: "Downloads Ein-/Ausblenden",
  Frontend_FluentCore_Settings_ShowDownloadsPanel_Description: "Schaltet die Sichtbarkeit der Liste mit den Downloads ein/aus",
  Frontend_FluentCore_Settings_ShowSplashScreen_Label: "Startbild anzeigen",
  Frontend_FluentCore_Settings_ShowSplashScreen_Description: "Schaltet das Startbild Fensters an/aus",
  Frontend_FluentCore_Settings_ShowFetchBrowserWindows_Label: 'Show FetchBrowser Windows',
  Frontend_FluentCore_Settings_ShowFetchBrowserWindows_Description: 'This developer focused option toggles the visibility of the browser windows for fetching data in the background on/off',
  //
  Frontend_FluentCore_SettingsDialog_Title: "Einstellungen",
  Frontend_FluentCore_SettingsDialog_CloseButton_Label: "Fertig",
  //
  Frontend_FluentCore_BookmarkList_Heading: "Lesezeichen",
  //
  Frontend_FluentCore_DownloadManager_Heading: 'Downloads',
  Frontend_FluentCore_DownloadManagerTask_StatusQueued_Description: "In der Warteschlange",
  Frontend_FluentCore_DownloadManagerTask_StatusPaused_Description: "Pausiert",
  Frontend_FluentCore_DownloadManagerTask_StatusDownloading_Description: "Herunterladen",
  Frontend_FluentCore_DownloadManagerTask_StatusProcessing_Description: "In Bearbeitung",
  Frontend_FluentCore_DownloadManagerTask_StatusFailed_Description: "Fehlgeschlagen",
  Frontend_FluentCore_DownloadManagerTask_StatusCompleted_Description: "Abgeschlossen",
  Frontend_FluentCore_DownloadManagerTask_RemoveButton_Description: "Eintrag aus der Liste entfernen",
  //
  Frontend_FluentCore_WebsiteSelect_Description: "Eine Website aus der Liste der verfügbaren Webseiten auswählen",
  Frontend_FluentCore_WebsiteSelect_UpdateEntriesButton_Description: "Klicken, um eine Liste aller verfügbaren Titel von der Webseite herunter zu laden, abhängig von der Anzahl der erforderlichen Anfragen kann der Vorgang eine längere Zeit in Anspruch nehmen",
  Frontend_FluentCore_WebsiteSelect_BusyStatus_Description: "Abrufen der Liste aller verfügbaren Titel,\nje nach Anzahl der benötigten Anfragen kann dies eine Weile dauern",
  Frontend_FluentCore_WebsiteSelect_AddFavoriteButton_Description: "Diese Webseite zu der Liste der bevorzugten Webseiten hinzufügen",
  Frontend_FluentCore_WebsiteSelect_RemoveFavoriteButton_Description: "Diese Webseite aus der Liste der bevorzugten Webseiten entfernen",
  Frontend_FluentCore_WebsiteSelect_OpenSettingsButton_Description: "Die Einstellungen für diese Webseite bearbeiten",
  Frontend_FluentCore_WebsiteSelect_SearchBox_Placeholder: '',
  //
  Frontend_FluentCore_MediaTitleSelect_Description: "Einen Medientitel aus der Liste der verfügbaren Medientitel auswählen",
  Frontend_FluentCore_MediaTitleSelect_UpdateEntriesButton_Description: "Klicken, um eine Liste aller verfügbaren \nKapitel/Episoden von der Webseite herunterzuladen, abhängig von der Anzahl der erforderlichen Anfragen kann der Vorgang eine längere Zeit in Anspruch nehmen",
  Frontend_FluentCore_MediaTitleSelect_BusyStatus_Description: "Die Liste aller verfügbaren \nKapitel/Episoden wird gerade von der Webseite heruntergeladen,\nabhängig von der Anzahl der erforderlichen Anfragen kann der Vorgang eine längere Zeit in Anspruch nehmen",
  Frontend_FluentCore_MediaTitleSelect_AddBookmarkButton_Description: "Diesen Titel zu der Liste der Lesezeichen hinzufügen",
  Frontend_FluentCore_MediaTitleSelect_RemoveBookmarkButton_Description: "Diesen Titel aus der Liste der Lesezeichen entfernen",
  Frontend_FluentCore_MediaTitleSelect_PasteClipboardButton_Description: "Erkenne den Titel aus dem Link, der derzeit in der Zwischenablage kopiert ist",
  Frontend_FluentCore_MediaTitleSelect_SearchBox_Placeholder: '',
  //
  Frontend_FluentCore_MediaItemList_Heading: 'Media Items',
  Frontend_FluentCore_MediaItemList_PreviewButton_Description: "Inhalt anzeigen",
  Frontend_FluentCore_MediaItemList_DownloadButton_Description: "Inhalt herunterladen",
  //
  Frontend_FluentCore_Preview_CloseButton_Description: "Vorschau schließen",
  //
  Frontend_FluentCore_SearchBox_ClearButton_Description: "Aktuelle Suchmaske zurücksetzen",
  Frontend_FluentCore_SearchBox_CaseSenstiveToggleButton_Description: "Umschalten zwischen Groß- und Kleinschreibung Modus",
  Frontend_FluentCore_SearchBox_CaseRegularExpressionToggleButton_Description: "Umschalten zwischen Text- und Regulären Ausdrucksmodus",
  // [SECTION]: Engine
  Settings_Global_Frontend: "Oberfläche",
  Settings_Global_FrontendInfo: "Benutzeroberfläche auswählen (Neustart erforderlich)",
  Settings_Global_Language: "Sprache",
  Settings_Global_LanguageInfo: "Sprache der Benutzeroberfläche festlegen",
  Settings_Global_MediaDirectory: "Medien-Verzeichnis",
  Settings_Global_MediaDirectoryInfo: "Wählen Sie das Verzeichnis, in dem HakuNeko die heruntergeladenen Inhalte speichern soll",
  Settings_Global_MediaDirectory_UnsetError: "Es wurde kein Verzeichnis zum Speichern der heruntergeladenen Inhalte in den Einstellungen ausgewählt!",
  Settings_Global_MediaDirectory_PermissionError: "Unzureichende Berechtigung, um auf das Verzeichnis mit den heruntergeladene Inhalte zuzugreifen!",
  Settings_Global_WebsiteSubDirectory: "Unterverzeichnisse verwenden",
  Settings_Global_WebsiteSubDirectoryInfo: "Legen Sie fest, ob HakuNeko Medien direkt im Verzeichnis speichern soll oder Unterverzeichnisse pro Website verwenden soll",
  Settings_Global_DescramblingFormat: "Entkachelungs Format",
  Settings_Global_DescramblingFormatInfo: "Wählen Sie das Ausgabe-Bildformat für Webseiten, die gekachelte Bilder verwenden (dies gilt NICHT für Webseiten, die bereits gültige Bilder bereitstellen)",
  Settings_Global_DescramblingFormat_PNG: 'PNG (*.png)',
  Settings_Global_DescramblingFormat_JPEG: 'JPEG (*.jpg)',
  Settings_Global_DescramblingFormat_WEBP: 'WEBP (*.webp)',
  Settings_Global_DescramblingQuality: "Entkachelungs Qualität",
  Settings_Global_DescramblingQualityInfo: "Wählen Sie die Ausgabe-Qualität für Webseiten, die gekachelte Bilder verwenden (findet KEINE Anwendung bei PNG)",
  Settings_Global_UserAgent: 'User-Agent',
  Settings_Global_UserAgentInfo: "Der User-Agent Header den HakuNeko für alle Anfragen an die Webseiten verwendet (bei fehlender Eingabe wir der Standard Wert genutzt)",
  Settings_Global_HCaptchaToken: 'H-Captcha Token',
  Settings_Global_HCaptchaTokenInfo: `Set the accessibility token to automatically bypass websites which use CloudFlare's H-Captcha protection`,
  Settings_Global_PostCommand: "Nachträglicher Befehl",
  Settings_Global_PostCommandInfo: '...',
  Settings_NewContent_Check: "Prüfung auf neue Inhalte",
  Settings_NewContent_CheckInfo: "Prüft automatisch, ob neue Inhalte für die Titel aus den Lesezeichen verfügbar sind",
  Settings_NewContent_CheckPeriod: "Zeitspanne (Minuten)",
  Settings_NewContent_CheckPeriodInfo: 'How many minutes before checking again for new content',
  Settings_NewContent_Notify: "Benachrichtigung",
  Settings_NewContent_NotifyInfo: "Aktiviert die Desktop-Benachrichtigung für neue Inhalte",
  Settings_Global_RPCEnabled: "RPC aktivieren",
  Settings_Global_RPCEnabledInfo: "Aktiviert den Zugriff auf HakuNeko durch Software von Drittanbietern (wie z.B. HakuNeko Assistant)",
  Settings_Global_RPCPort: 'RPC Port',
  Settings_Global_RPCPortInfo: "Die Port-Nummer für die Kommunikation zwischen HakuNeko und Drittanbieter Programmen (z.B. HakuNeko Assistant)",
  Settings_Global_RPCSecret: "RPC Schlüssel",
  Settings_Global_RPCSecretInfo: "Der Zugriffsschlüssel für die Kommunikation zwischen HakuNeko und Drittanbieter Programmen (z.B. HakuNeko Assistant)",
  SettingsManager_Settings_AlreadyInitializedError: "Ein interner Anwendungsfehler ist aufgetreten: Die Einstellungen mit dem Schlüssel <{0}> dürfen nur einmal initialisiert werden!",
  FetchProvider_FetchGraphQL_AggregateError: "Die Verarbeitung wurde aufgrund des/der folgenden GraphQL Fehler abgebrochen:\n{0}",
  FetchProvider_FetchGraphQL_MissingDataError: "Die Verarbeitung wurde aufgrund fehlender GraphQL Daten abgebrochen!",
  FetchProvider_FetchWindow_TimeoutError: "Die Anfrage konnte nicht innerhalb der angegebenen Zeitspanne durchgeführt werden!",
  FetchProvider_FetchWindow_CloudFlareError: "Die Anfrage wurde aufgrund des folgenden Fehlers beim CloudFlare Server zurückgewiesen: \"{0}\"",
  FetchProvider_FetchWindow_AlertCaptcha: "Bitte lösen Sie das Captcha und warten Sie dann auf die Anwendung (schließen Sie die Website nicht nach dem Lösen des Captcha)!",
  BookmarkPlugin_ConvertToSerializedBookmark_UnsupportedFormatError: "Die Daten scheinen fehlerhaft zu sein, es konnte kein Lesezeichen extrahiert werden!",
  // [SECTION]: Tags
  Tags_Media: "Kategorie",
  Tags_Media_Manga: 'Manga',
  Tags_Media_MangaDescription: 'Japan, Black & White, Single/Double Paged, ...',
  Tags_Media_Manhua: 'Manhua',
  Tags_Media_ManhuaDescription: 'China, Colored, Longstrip, ...',
  Tags_Media_Manhwa: 'Manhwa',
  Tags_Media_ManhwaDescription: 'South Korea, Colored, Longstrip, ...',
  Tags_Media_Comic: 'Comic',
  Tags_Media_ComicDescription: 'Western, Colored, ...',
  Tags_Media_Anime: 'Anime',
  Tags_Media_AnimeDescription: 'Anime, ...',
  Tags_Media_Cartoon: "Trickfilm",
  Tags_Media_CartoonDescription: "Trickfilm, ...",
  Tags_Media_Novel: "Novelle",
  Tags_Media_NovelDescription: 'Novel, ...',
  Tags_Source: "Quelle",
  Tags_Source_Official: "Offiziell",
  Tags_Source_Scanlator: 'Scanlator',
  Tags_Source_Aggregator: "Raubkopierer",
  Tags_Accessibility: "Verfügbarkeit",
  Tags_Accessibility_RegionLock: "Regional Eingeschränkt",
  Tags_Accessibility_RegionLockDescription: "Zugriff nur für freigeschaltete Länder (Geo-IP)",
  Tags_Accessibility_RateLimit: "Abfrage Begrenzung",
  Tags_Accessibility_RateLimitDescription: "Limitierte Download-Geschwindigkeit, IP Adresse kann bei Überschreitung gesperrt werden",
  Tags_Rating: "Einstufung",
  Tags_Rating_Safe: "Sicher",
  Tags_Rating_Suggestive: "Reizvoll",
  Tags_Rating_Erotica: "Erotisch",
  Tags_Rating_Pornographic: "Pornografisch",
  Tags_Language: "Sprache",
  Tags_Language_Multilingual: "🌐Mehrsprachig",
  Tags_Language_Arabic: "🇸🇦Arabisch",
  Tags_Language_Chinese: "🇨🇳Chinesisch",
  Tags_Language_English: "🇬🇧Englisch",
  Tags_Language_French: "🇫🇷Französisch",
  Tags_Language_German: "🇩🇪Deutsch",
  Tags_Language_Indonesian: "🇮🇩Indonesisch",
  Tags_Language_Italian: "🇮🇹Italienisch",
  Tags_Language_Japanese: "🇯🇵Japanisch",
  Tags_Language_Korean: "🇰🇷Koreanisch",
  Tags_Language_Polish: "🇵🇱Polnisch",
  Tags_Language_Portuguese: "🇵🇹🇧🇷Portugisisch",
  Tags_Language_Russian: "🇷🇺Russisch",
  Tags_Language_Spanish: "🇪🇸🇦🇷Spanisch",
  Tags_Language_Thai: "🇹🇭Thailändisch",
  Tags_Language_Turkish: "🇹🇷Türkisch",
  Tags_Language_Vietnamese: "🇻🇳Vietnamesisch",
  Tags_Others: "Sonstige",
  // [SECTION]: Trackers
  Tracker_Kitsu_Settings_Username: "Benutzername",
  Tracker_Kitsu_Settings_UsernameInfo: "Benutzername für die automatische Anmeldung bei Kitsu",
  Tracker_Kitsu_Settings_Password: "Passwort",
  Tracker_Kitsu_Settings_PasswordInfo: "Passwort für die automatische Anmeldung bei Kitsu",
  // [SECTION]: Plugins
  Plugin_Settings_ThrottlingDownloads: "Drosselung für Downloads [ms]",
  Plugin_Settings_ThrottlingDownloadsInfo: '...',
  Plugin_Settings_ThrottlingInteraction: "Zugriffsbegrenzung [Anfragen/Minute]",
  Plugin_Settings_ThrottlingInteractionInfo: "Einschränkung der Anzahl von Abfragen an die Webseite zur Prävention einer temporären oder dauerhaften Sperrung",
  Plugin_Common_MangaIndex_NotSupported: "Ein Inhaltsverzeichnis kann für diese Webseite nicht erstellt werden. Benutze die Kopieren & Einfügen Funktionalität um direkt auf den Inhalt einer URL zuzugreifen!",
  Plugin_Common_Chapter_UnavailableError: "Das Kapitel ist nicht verfügbar (gekauft/freigeschaltet/öffentlich)!",
  Plugin_Common_Chapter_InvalidError: "Fehler beim extrahieren der einzelnen Seiten aus dem Kapitel!",
  Plugin_MissingWebsite_UpdateError: "Fehler bei der Aktualisierung des Inhaltsverzeichnis für eine nicht-existierende Webseite!",
  Plugin_MissingWebsiteEntry_UpdateError: "Fehler bei der Aktualisierung des Medienverzeichnis für eine nicht-existierende Webseite!",
  Plugin_SheepScanlations_Settings_Username: "Benutzername",
  Plugin_SheepScanlations_Settings_UsernameInfo: "Benutzername für die automatische Anmeldung bei der Webseite",
  Plugin_SheepScanlations_Settings_Password: "Passwort",
  Plugin_SheepScanlations_Settings_PasswordInfo: "Passwort für die automatische Anmeldung bei der Webseite"
};
export default translations;