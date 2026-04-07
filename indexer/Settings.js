'use strict';

const MetadataTypes = {
        STRING:             "STRING",
        STRING_ARRAY:       "STRING_ARRAY", // strings from multiple comment lines
        PRESET_CATEGORY:    "PRESET_CATEGORY", // TUNE/RATES/OSD etc
        FILE_PATH:          "FILE_PATH", // path/to/file.ext and check if file exists
        BOOLEAN:            "BOOLEAN", // true/false
        WORDS_ARRAY:        "WORDS_ARRAY", // "word1, word2, word3"
        FILE_PATH_ARRAY:    "FILE_PATH_ARRAY", // array of path/to/file.ext and check if files exist
        PRESET_STATUS:      "PRESET_STATUS", // official/community/experimental
        PRIORITY:           "PRIORITY", // 0..99
        PARSER:             "PARSER", // TEXT, MARKED
}

const PresetStatusEnum = ["OFFICIAL", "COMMUNITY", "EXPERIMENTAL"];
const ParserEnum =       ["TEXT", "MARKED"];

const PresetCategories = {
    SETUP:          "SETUP",
    FILTERS:        "FILTERS",
    PROFILE:        "PROFILE",
    RATEPROFILE:    "RATEPROFILE",
    REMAPPING:      "REMAPPING",
    BNF:            "BNF",
    OTHER:          "OTHER",
}

const PresetCategoriesPriorities = {
    SETUP:         0,
    FILTERS:       0,
    PROFILE:           10**12,
    RATEPROFILE:          10**4,
    REMAPPING:          0,
    FILTERS:        10**2,
    BNF:            0,
    OTHER:          0,
}

const OptionsDirectives = {
    OPTION_DIRECTIVE: "option",
    BEGIN_OPTION_DIRECTIVE: "option begin",
    END_OPTION_DIRECTIVE: "option end",
    OPTION_CHECKED: "(checked)",
    OPTION_UNCHECKED: "(unchecked)",
    BEGIN_OPTION_GROUP_DIRECTIVE: "option_group begin",
    END_OPTION_GROUP_DIRECTIVE: "option_group end",
    EXCLUSIVE_OPTION_GROUP: "(exclusive)",
}

const settings = {
    MetapropertyDirective: "#$",

    PresetCategories: Object.freeze(PresetCategories),
    PresetCategoriesPriorities: Object.freeze(PresetCategoriesPriorities),

    MetadataTypes: Object.freeze(MetadataTypes),

    OptionsDirectives : Object.freeze(OptionsDirectives),

    PresetStatusEnum : Object.freeze(PresetStatusEnum),
    ParserEnum : Object.freeze(ParserEnum),

    presetsDir: "presets",
    presetsFileEncoding: "utf-8",

    presetsFileMetadata: Object.freeze({
        title:                {type: MetadataTypes.STRING,           optional: false  },
        firmware_version:     {type: MetadataTypes.STRING_ARRAY,     optional: false  },
        category:             {type: MetadataTypes.PRESET_CATEGORY,  optional: false  },
        status:               {type: MetadataTypes.PRESET_STATUS,    optional: false  },
        board_name:           {type: MetadataTypes.STRING_ARRAY,     optional: true   },
        author:               {type: MetadataTypes.STRING,           optional: true   },
        description:          {type: MetadataTypes.STRING_ARRAY,     optional: true   },
        include:              {type: MetadataTypes.FILE_PATH_ARRAY,  optional: true   },
        keywords:             {type: MetadataTypes.WORDS_ARRAY,      optional: true   },
        hidden:               {type: MetadataTypes.BOOLEAN,          optional: true   },
        discussion:           {type: MetadataTypes.STRING,           optional: true   },
        warning:              {type: MetadataTypes.STRING,           optional: true   },
        disclaimer:           {type: MetadataTypes.STRING,           optional: true   },
        include_warning:      {type: MetadataTypes.FILE_PATH_ARRAY,  optional: true   },
        include_disclaimer:   {type: MetadataTypes.FILE_PATH_ARRAY,  optional: true   },
        priority:             {type: MetadataTypes.PRIORITY,         optional: true   },
        force_options_review: {type: MetadataTypes.BOOLEAN,          optional: true   },
        parser:               {type: MetadataTypes.PARSER,           optional: true   },
    }),
}

module.exports = Object.freeze(settings);
