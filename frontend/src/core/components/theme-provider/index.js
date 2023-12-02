import PropTypes from "prop-types";
import ConfigProvider from "antd/lib/config-provider";

export default function ThemeProvider({ children }) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#FF9100",
                    colorInfo: "#FF9100",
                    colorTextBase: "#181719",
                    colorBorder: "#e5e3e1",
                    colorBorderSecondary: "#e5e3e1",
                    colorSuccess: "#00AF46",
                    colorWarning: "#FF9900",
                    colorError: "#FF2626",
                    colorPrimaryBg: "#f7f5f2",
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
