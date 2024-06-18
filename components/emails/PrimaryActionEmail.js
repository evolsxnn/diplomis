"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryActionEmailHtml = exports.EmailTemplate = void 0;
var components_1 = require("@react-email/components");
var React = __importStar(require("react"));
var EmailTemplate = function (_a) {
    var actionLabel = _a.actionLabel, buttonText = _a.buttonText, href = _a.href;
    return (React.createElement(components_1.Html, null,
        React.createElement(components_1.Head, null),
        React.createElement(components_1.Preview, null, "\u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441 \u0441 \u0442\u043E\u0432\u0430\u0440\u0430\u043C\u0438 \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430."),
        React.createElement(components_1.Body, { style: main },
            React.createElement(components_1.Container, { style: container },
                React.createElement(components_1.Img, { src: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/hippo-newsletter-sign-up.png"), width: '150', height: '150', alt: 'OwlMarket', style: logo }),
                React.createElement(components_1.Text, { style: paragraph }, "\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0441\u0443\u0442\u043E\u043A,"),
                React.createElement(components_1.Text, { style: paragraph },
                    "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u043D\u0430 OwlMarket - \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441 \u0441 \u0442\u043E\u0432\u0430\u0440\u0430\u043C\u0438 \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \u0434\u043B\u044F ",
                    actionLabel,
                    "."),
                React.createElement(components_1.Section, { style: btnContainer },
                    React.createElement(components_1.Button, { style: button, href: href }, buttonText)),
                React.createElement(components_1.Text, { style: paragraph },
                    "\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C,",
                    React.createElement("br", null),
                    "\u043A\u043E\u043C\u0430\u043D\u0434\u0430 OwlMarket."),
                React.createElement(components_1.Hr, { style: hr }),
                React.createElement(components_1.Text, { style: footer }, "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u043B\u0438 \u043F\u0438\u0441\u044C\u043C\u043E, \u043F\u0440\u043E\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435.")))));
};
exports.EmailTemplate = EmailTemplate;
var PrimaryActionEmailHtml = function (props) { return (0, components_1.render)(React.createElement(exports.EmailTemplate, __assign({}, props)), { pretty: true }); };
exports.PrimaryActionEmailHtml = PrimaryActionEmailHtml;
var main = {
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};
var container = {
    margin: '0 auto',
    padding: '20px 0 48px',
};
var logo = {
    margin: '0 auto',
};
var paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
};
var btnContainer = {
    textAlign: 'center',
};
var button = {
    padding: '12px 12px',
    backgroundColor: '#2563eb',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
};
var hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};
var footer = {
    color: '#8898aa',
    fontSize: '12px',
};
